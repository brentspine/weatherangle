<img src="https://github.com/user-attachments/assets/7b753c9b-a245-47ad-9b0a-b3c133e26562" height=100>

[Ticketnummer zensiert]

## Inhalt

**[1. Beschreibung](#beschreibung-)**<br>
**[2. Vorbereitung](#vorbereitung-)**<br>
**&nbsp;&nbsp;&nbsp;&nbsp;[2.1 Online Tutorial](#online-tutorial-)**<br>
**&nbsp;&nbsp;&nbsp;&nbsp;[2.2 Lokales Tutorial](#lokales-tutorial-)**<br>
**[3. Design](#design-)**<br>
**&nbsp;&nbsp;&nbsp;&nbsp;[3.1 Hauptidee](#user-content-#design-hauptidee)**<br>
**[4. DWD API](#user-content-#dwd-api)**<br>
**&nbsp;&nbsp;&nbsp;&nbsp;[4.1 Stationsdaten](#user-content-#dwd-stationsdaten)**<br>
**[5. Nominatim & OpenMeteo](#user-content-#nominatim-openmeteo)**<br>
**&nbsp;&nbsp;&nbsp;&nbsp;[5.1 Nominatim](#user-content-#nominatim)**<br>
**&nbsp;&nbsp;&nbsp;&nbsp;[5.2 OpenMeteo](#user-content-#openmeteo)**<br>

## Beschreibung <span id="#beschreibung"></span>

Die Aufgabe ist es, ein Frontend zu entwickeln, welches die API des Deutschen Wetterdienstes nutzt.

Bevor mit der Entwicklung des Frontends begonnen wird, soll ein Mockup in Figma erstellt werden. 

API: https://dwd.api.bund.dev/

**Persönliche Anmerkung** <br>
Die Vorgabe ist es mit dem Web-Framework [Angular](https://angular.dev) zu arbeiten, welches im RVS Frontend verwendet wird. Das von Google entwickelte Framework benötigt Kenntnisse in TypeScript. 

## Vorbereitung <span id="#vorbereitung"></span>

Da ich zum Start des Tickets keine Erfahrungen mit Angular und nur bedingt Wissen über TypeScript besaß, entschied ich mich dafür, erst Tutorials abzuschließen, bevor ich mich ans eigentliche Projekt machte. Dafür sah ich mir die neue [Angular Seite](https://angular.dev) an und stoß schnell auf offizielle Tutorials.

### Online Tutorial <span id="#vorbereitung-online"></span>

Dieses Tutorial erlaubt es einige Features von Angular mit Hilfe eines Online Code-Editors direkt im Browser zu erlernen. Hier ist ein Link zu der Seite: https://angular.dev/tutorials/learn-angular

Hier sind ein paar Beispiele der Übungsaufgaben: 

<a href="https://angular.dev/tutorials/learn-angular/9-output" target="_blank"><img src="https://github.com/user-attachments/assets/5bc0cc84-334a-419d-ba44-e418cdd77903" width=245 height=200></a>
<a href="https://angular.dev/tutorials/learn-angular/10-deferrable-views" target="_blank"><img src="https://github.com/user-attachments/assets/09a2d47e-7735-4576-a13f-f4ca75f03234" width=207 height=200></a>
<a href="https://angular.dev/tutorials/learn-angular/11-optimizing-images" target="_blank"><img src="https://github.com/user-attachments/assets/5d7341d4-c9b8-4201-a28c-f7a800b14875" width=208 height=200></a>
<a href="https://angular.dev/tutorials/learn-angular/14-routerLink" target="_blank"><img src="https://github.com/user-attachments/assets/398e33dd-5d4b-418f-ac5e-ca19bf57b158" width=207 height=200></a>

<p>🖱☝ Bilder führen zu der jeweiligen Lektion</p>

### Lokales Tutorial <span id="#vorbereitung-offline"></span>

Dieses Tutorial besitzt 2 Versionen. Zum einen ein Tutorial in Textform, welches [hier](https://angular.dev/tutorials/first-app) zu finden ist und eine YouTube Playlist, [hier](https://www.youtube.com/watch?v=xAT0lHYhHMY&list=PL1w1q3fL4pmj9k1FrJ3Pe91EPub2_h4jF). Beide beschäftigen sich damit eine Makler-Webseite zu bauen, in der man nach Unterkünften und Häusern suchen kann. Da sich das Projekt mit Frontend beschäftigt, benutzen wir eine JSON API, welche nur auf statische Daten zugreift. 

Das Repository zum Projekt befindet sich hier: [github.com](https://github.com/brentspine/angular-tutorial)<br>
Hier ist ein Beispielvideo des Endproduktes: [Upload](https://github.com/user-attachments/assets/ccc70eb1-79d7-45d9-abb6-9867a91429a3)<br>
Die "API", auf die via HTTP zugegriffen wird: [brentspine.github.io](https://brentspine.github.io/public-uploads/ng-tutorial-locations.json)

## Design <span id="#design"></span>

Für das Design sollte zuerst ein Mockup in Figma erstellt werden.

### Hauptidee <span id="#design-hauptidee"></span>

Persönlich bin ich ein Fan von modern aussehenden Web-Anwendungen mit minimalistischem Design. Ein häufig wiederkehrendes Element von Seiten dieser Art ist ein vollumfängliches Hintergrundbild. Somit entschied auch ich mich ebenfalls dafür und benutzte ein Bild der [Berliner Skyline](https://live.staticflickr.com/65535/52839296592_aa5b0f9043_b.jpg). Damit nicht zu viel Fokus auf dem Bild liegt und man den eigentlichen Inhalt der Seite besser erkennen kann fügte ich einerseits einen Blur Filter hinzu und setzte zum anderen die Opacity auf 20%. Somit kann man die Hintergrund-Farbe #1C1C1C; durch erkennen, welche das Bild abgedunkelt erscheinen lässt. Alle Bilder sind unter CreativeCommons frei zur Nutzung freigegeben und in der App mit Erstellercredit zu finden

Für das Logo erstellte ich ein separates Figma Projekt. Ich erstellte einen Schriftzug in der Farbe von Angular und ersetzte den Buchstaben "A" in diesem Schriftzug mit dem Angular-Logo. Dieses Design exportierte ich und fügte es als erstes Objekt in den Header ein. Zu diesem fügte ich dann ein Beispiel Anchor-Link hinzu. Beide Objekte erhielten die Opacity von 80%, damit man später einen schönen [Hover Effekt](https://github.com/user-attachments/assets/7808530d-04fe-4f25-8f8e-6b85899d953c) hinzufügen kann.

Der Hauptfokus des Mainpage-Designs sollte sein, dass man die wichtigsten Infos auf einen Blick hat. Hierfür platzierte ich die aktuelle Temperatur in Akzent-Farbe, sowie den ausgewählten Standort und mehr Informationen zur Wetterstation in der Mitte. Man soll durch klicken auf den Standort einen anderen auswählen können. [Siehe hier](https://github.com/user-attachments/assets/6706bc73-d54a-432b-972e-e64d66b28a94)

Im unteren Drittel der App wollte ich einige Wettervorhersagen anzeigen, hierfür platzierte ich einen 80% durchsichtigen weißen Kasten, der für diese Infos reserviert war. In Figma platzierte einige Dummy-Daten, ohne mich auf ein finales Design festlegen zu wollen. Der Plan ist es, mich erst mit der API zu befassen. Die erste Hauptideen-Skizze befindet sich hier:

<img src="https://github.com/user-attachments/assets/902e2f5f-0129-4f72-96b6-befc8d6b7de3">

## Die DWD API <span id="#dwd-api"></span>

Die Vorgabe war es die API des deutschen Wetterdienstes zu verwenden. Diese steht der OpenData-Idee nach jedem offen zur Verfügung. Es wurde diese URL angegeben: https://dwd.api.bund.dev/

Hier ein Auszug aus der dort verlinkten [ausführlichen Dokumentation](https://listed.to/@DieSieben/7851/api-des-deutschen-wetterdienstes):

> Der deutsche Wetterdienst bietet, seit durchaus geraumer Zeit, einen Großteil seiner Wetterdaten im Zuge der Open Data-Idee an, erreichbar sind diese über Portale wie https://opendata.dwd.de/, https://maps.dwd.de/geoserver/web/ und einige kleinere Zugangspunkte.
>
>Alle gemein haben sie es recht unübersichtlich groß sowie träge zu sein. Insbesondere sind sie jedoch durch ihren Aufbau als komprimierte CSV-Dateien und ähnliche Formate kaum für einen schnellen einfachen Echtzeitzugriff geeignet.
>
>Einfacher wäre es an dieser Stelle die interne JSON-API der Warnwetter-App zu verwenden deren Aufbau man sich jedoch erst mühsam selbst aus dem dekompilierten Quellcode selbst erschließen muss. Im folgenden einige Notizen dazu.
>
>Natürlich alles andere als vollständig. Bei Gelegenheit werde ich die Liste mal erweitern. (Stand: 25.08.2019)


### Stations-Daten <span id="#dwd-stationsdaten"></span>

Über die API kann man in der Theorie die Daten aller gelisteten Wetterstationen abgreifen. Hierfür exportierte ich mir alle Stationen:

Gescraped von https://www.dwd.de/DE/leistungen/klimadatendeutschland/statliste/statlex_html.html;jsessionid=1D400746C6E324F422A2E4023FF3D549.live31083?view=nasPublication&nn=16102

```let i = -1;
let r = [];
document.querySelectorAll("table tr").forEach(function(c) {
    i++;
    if(i < 2) return;
    const args = c.querySelectorAll("td");
    let t = {
        "stations_name": args[0].innerHTML.replaceAll("&nbsp;", "").replaceAll("\n", ""),
        "stations_id": args[1].innerHTML.replaceAll("&nbsp;", "").replaceAll("\n", ""),
        "kennung": args[2].innerHTML.replaceAll("&nbsp;", "").replaceAll("\n", ""),
        "breitengrad": args[3].innerHTML.replaceAll("&nbsp;", "").replaceAll("\n", ""),
        "laengengrad": args[4].innerHTML.replaceAll("&nbsp;", "").replaceAll("\n", ""),
        "stations_hoehe": args[5].innerHTML.replaceAll("&nbsp;", "").replaceAll("\n", ""),
        "flussgebiet": args[6].innerHTML.replaceAll("&nbsp;", "").replaceAll("\n", ""),
        "bundesland": args[7].innerHTML.replaceAll("&nbsp;", "").replaceAll("\n", ""),
        "beginn": args[8].innerHTML.replaceAll("&nbsp;", "").replaceAll("\n", ""),
        "ende": args[9].innerHTML.replaceAll("&nbsp;", "").replaceAll("\n", ""),
    }
    r.push(t);
});
console.log(JSON.stringify(r));
```

Dieses Skript wurde verwendet um zu prüfen, ob Stationen Daten enthalten oder nicht: \ https://github.com/brentspine/weatherangle/blob/main/station_check/station_check.py

Die daraus resultierenden Daten befinden sich hier: \
https://github.com/brentspine/weatherangle/tree/main/station_check

Nach langem ausprobieren und Implementierung der API merkte ich einerseits Defizite in der Geschwindigkeit, aber vor allem der Organisation und Korrektheit der Daten. Viele Endpunkte lieferten veraltete Wettervorhersagen. Nach Erläuterung des Sachverhalts und Rücksprache mit [zensiert] erhielt ich die Erlaubnis eine andere Wetter-API zu verwenden. Siehe unten.

## Nominatim und OpenMeteo <span id="#nominatim-openmeteo"></span>

Die Lizensen für Nominatim von OpenStreetMap und OpenMeteo befinden sich [hier](https://github.com/osm-search/Nominatim?tab=GPL-3.0-1-ov-file#readme) und [hier](https://open-meteo.com/en/license).

Da mit der App kein Profit gemacht wird, dürfen wir die beiden APIs frei benutzen, solange wir Credit geben. Das plane ich unter dem Header Link "Info" zu tun. 

### Nominatim <span id="#nominatim"></span>

Die von OpenStreetMap herausgegebene Nominatim API erlaubt es den Namen von Orten, Städten oder Straßen in Longitude und Langitude umzuwandeln und anders herum. Wenn wir initial die Position des Nutzers via GeoLocation abfragen, können wir durch Nominatim einen zugehörigen Stadtnamen finden. Falls der Nutzer nach einem Stadtnamen sucht können wir zudem via OpenStreetMap die passenden Koordinaten finden. Diese werden wir im nächsten für die OpenMeteo API brauchen. 

Im `PlaceLookupService` finden wir diese benötigten Features umgesetzt:

```
async getNominatimForPlace(place: string|null) {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${place}`);
    const data = await response.json()
    return data[0] ?? undefined;
  }

  async getNominatimForLatLong(lat: Number, lon: Number) {
    // Zoom 10 -> City level
    // Otherwise we got the name of a street or an apartment
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10`);
    const data = await response.json()
    return data ?? undefined;
  }
 ```
 
Nominatim Search gibt einen Array an Orten zurück, wobei wir der Einfachheit halber nur den relevantesten Eintrag nutzen. Der Reverse Lookup hingegen gibt direkt nur ein Nomintim Objekt zurück, da die Suche eindeutig ist. Wir benutzen einen `zoom` Wert von 10, da wir aktiv nur nach Städten suchen. Eine ausführliche Erklärung befindet sich hier: https://nominatim.org/release-docs/develop/api/Reverse/#result-restriction
 
Als To-Do sollte sicherheitshalber noch ein Interface oder eine Klasse für die Nominatim Objekte erstellt werden.

### OpenMeteo <span id="#openmeteo"></span>

Die [OpenMeteo API](https://open-meteo.com/) lässt uns die oben beschriebenden Koordinaten in Wettervorhersagen umwandeln. Dabei können wir verschiedene Arten von Daten abfragen, wie die Temperaturvorhersagen, vorraussichtliche Windgeschwindigkeit, Regenwahrscheinlichkeit und vieles mehr. Der Service agiert zur Zeit noch relativ einfach und beinhaltet nur 2 Funktionen.

```
async getForeCastForLocation(lat: Number, lon: Number) {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
    const data = await response.json()
    return data ?? undefined;
  }
```

Wir fragen die folgenden Vorhersagen für die nächsten 200h ab, diese Werte sind im 60 Minuten Abstand: Temperatur, Luftfeuchtigkeit, Windgeschwindigkeit.

OpenMeteo liefert neben rohen Daten auch "WMO Weather interpretation codes", welche als Icons dargestellt werden können. Die Beschreibungen der Icons sind [hier](https://open-meteo.com/en/docs#weathervariables) dokumentiert, während ich die Bilder von [dieser Seite](https://worldweather.wmo.int/de/wxicons.html) heruntergeladen habe.
