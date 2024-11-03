# Basierend auf einer Ausgabe von ChatGPT, Original abgeändert

import requests
import json
import time

with open('stations.json', 'r') as file:
    stations = json.load(file)

stations_with_forecasts = []

def create_url_for_stations(station_ids):
    base_url = 'https://dwd.api.proxy.bund.dev/v30/stationOverviewExtended?stationIds='
    station_ids_str = ','.join(station_ids)
    return base_url + station_ids_str

def process_stations(stations):
    for i in range(0, len(stations), 3):
        batch = stations[i:i+3]
        station_ids = [station['stations_id'] for station in batch]
        url = create_url_for_stations(station_ids)
        
        try:
            response = requests.get(url, verify=False)
            response_data = response.json()

            for station in batch:
                station_id = station['stations_id']
                if station_id in response_data:
                    stations_with_forecasts.append(station)

            time.sleep(0.1)
            print(len(stations_with_forecasts))
            
        except requests.RequestException as e:
            print(f"Error querying stations: {station_ids}. Error: {e}")

process_stations(stations)

with open('stations_filtered.json', 'w') as outfile:
    json.dump(stations_with_forecasts, outfile, indent=4)

print(f"Saved {len(stations_with_forecasts)} stations with forecasts to stations_filtered.json")