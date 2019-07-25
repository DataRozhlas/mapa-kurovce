title: "Satelitní snímky ukazují, kde řádil kůrovec"
perex: "Během loňského roku vzrostlo množství vytěženého dřeva o třetinu, na vině je kůrovcová kalamita. Podívejte se na aktuální satelitní snímky, kde jsou lesy suché nebo už úplně zmizely."
coverimg: https://www.irozhlas.cz/sites/default/files/styles/zpravy_snowfall/public/uploader/kuuse-kooreurask_ja__190724-171033_cib.jpg?itok=mGs_MIJg
coverimg_note: "Foto <a href=\"https://en.wikipedia.org/wiki/File:Kuuse-koore%C3%BCrask_ja_tegutsemisj%C3%A4ljed_Ips_typographus.jpg\">Tõnu Pani</a>"
styles: ['https://unpkg.com/leaflet@1.5.1/dist/leaflet.css', 'https://api.tiles.mapbox.com/mapbox-gl-js/v1.1.1/mapbox-gl.css']
libraries: [jquery, 'https://unpkg.com/leaflet@1.5.1/dist/leaflet.js', 'https://unpkg.com/esri-leaflet@2.3.0/dist/esri-leaflet.js', 'https://api.tiles.mapbox.com/mapbox-gl-js/v1.1.1/mapbox-gl.js'] #jquery, d3, highcharts, datatables
options: [] #wide, noheader (, nopic)
---

Sucho a s ním související kůrovcová kalamita. Tak [vysvětloval pro Radiožurnál](https://www.irozhlas.cz/ekonomika/kurovec-ceske-lesy-kalamita-tezba_1906160635_haf) Jiří Hrbek ze statistického úřadu, proč v loňském roce těžba dřeva dosáhla historického maxima.

A podle Miroslava Svobody z dřevařské fakulty České zemědělské univerzity situace v dohledné době lepší nebude: „Mnozí vlastníci, přestože by podle zákona měli sanovat a zpracovávat, rezignovali na boj s kůrovcem. Ta situace není vůbec dobrá, a i přes ten relativně chladný květen to vypadá, že množství dřeva napadené kůrovcem bude letos podobné jako loni, ne-li výrazně vyšší,“ myslí si.

<left>
	<p>
	<b>Satelitní snímky</b>
	</p><p>
	Satelitní snímky v pravé mapě pochází z družic Sentinel 2 a Landsat 8. A ač jde o nejaktuálnější volně dostupné záběry, nemusí vždy odpovídat realitě: satelit nad oblastní přeletí vždy za několik dní a snímky je následně nutné přenést a zpracovat. 
	<p>Aktualizaci někdy také zmaří počasí: Pokud je vysoká oblačnost, snímky jsou k ničemu a je třeba počkat na další oblet satelitu.</p>
	</p>
</left>

Právě jako podpora majitelům a správcům lesů vnikl projekt [Kůrovcová mapa](https://www.kurovcovamapa.cz/). Experti z [Ústavu pro hospodářskou úpravu lesů](http://www.uhul.cz/) zde pomocí satelitních snímků vytipovávají místa, kde hrozí šíření kůrovce smrkového _(Ips typographus)_. Rizikové lokality značí barvami do mapy a lesníci tak mohou snadno zjistit, která místa ve svém rajónu by měli zkontrolovat.

Kůrovcová mapa výsledky šetření zobrazuje na starší letecké mapě, není na ní tedy vidět, jak lesy vypadají nyní. Takový obrázek nabízí aktuální satelitní snímky z evropského družicového programu [Copernicus](https://www.copernicus.eu/en) a jeho amerického protějšku [Landsat](https://www.usgs.gov/land-resources/nli/landsat). 

<i>V levé mapě jsou <font color="blue">modře</font> označené lokality, kde proběhla těžba dřeva, <font color="red">červeně</font> jsou uschlé stromy z letošního dubna. Informace pochází z webu [Kurovcovamapa.cz](https://www.kurovcovamapa.cz/). Vpravo můžete následky porovnat na aktuálních satelitních snímcích.</i>

_Jako výchozí je na mapě přiblížená národní přírodní rezervace Břehyně - Pecopala, kde zásahy proti kůrovci [vyvolaly odpor ochránců přírody i odborné veřejnosti](https://www.irozhlas.cz/zpravy-domov/rezervace-kaceni-doksy-narodni-prirodni-rezervace_1904151152_pj)._

<wide>
<form action="?" id='frm-geocode'>
	  <div class="inputs">
	    <input type="text" id="inp-geocode" placeholder="Zadejte obec či adresu...">
	    <input type="submit" id="inp-btn" value="Najít">
	  </div>
	</form>
<div id="maps">
    <div id="map_left"></div>
    <div id="map_right"></div>
</div>
</wide>
<p></p>

## Kůrovec v hlavním městě

Kalamita v podobě kůrovce neminula ani hlavní město. [Z pražských lesů muselo být vykáceno přes 2600 kubíků napadených stromů](https://www.irozhlas.cz/zpravy-domov/kurovec-praha-lazne-sverenske-fondy-nezamestnanost-prehled-tisku_1903060745_dbr). Stejně jako v celé republice, tak i v Praze může za šíření kůrovce především loňské suché jaro a léto. I přesto, že se kůrovec šíří rychle, v Praze zatím nejde o kalamitní stav.

V Praze brouci napadali spíš jednotlivé stromy v různých lokalitách a v porovnání s ostatními postiženými oblastmi je hlavní město hluboce pod průměrem, jak uvedla mluvčí Lesů hlavního města Prahy Petra Fišerová.

## Orlické hory i Krkonoše

Několik tisíc hektarů lesa v CHKO Orlické hory ohrožuje kůrovcová kalamita. Situaci místních lesů považují vlastníci za vážnou. „Orlické hory jsou v kalamitní zóně. Ohrožení lesa (kůrovcem) v Orlických horách je s ohledem na jeho strukturu a zastoupení dřevin vysoké,“ sdělil Martin Fojt ze Správy Kolowratských lesů, která hospodaří na téměř 5400 hektarech lesa. Téměř 90 procent této výměry leží na území CHKO Orlické hory.

Kůrovec ale ohrožuje i těžbu dřeva v předhoří, což je navazující oblast na Orlické hory, kde činí zasažená oblast okolo 20 procent. Těžba dřeva tak [dramaticky vzrostla a prodejní cena klesla dolů](https://www.irozhlas.cz/zpravy-domov/kurovec-kalamita-orlicke-hory-kolowratske-lesy-lesy-cr-kristina-colloredo_1905290646_dbr). Lesníci proto mají problémy s odbytem a tato situace způsobuje ekonomické problémy zejména soukromníkům. 

![Orlické hory zasažené kůrovcem](https://www.irozhlas.cz/sites/default/files/styles/zpravy_fotogalerie_medium/public/uploader/orlhory_komari_vrch_190725-164416_cib.jpg?itok=ZbcX6ALx)

Krkonošský národní park v roce 2018 vytěžil výrazně více kůrovcového dřeva než v minulých letech. [Důvodem byl nejen kůrovec ale i větrná kalamita](https://www.irozhlas.cz/zpravy-domov/krkonose-krnap-drevo-tezba-kurovec-kalamita_1812301019_dp), která les na podzim roku 2017 zasáhla. Kůrovec neboli lýkožrout smrkový je přirozenou součástí přírody a cílem není ho vyhubit, ale předcházet jeho přemnožení.

Mluvčí Správy Krkonošského národního parku (KRNAP) Radek Drahný uvedl, že přestože problémy s kůrovcem byly v uplynulém roce v Krkonoších větší než v minulých letech, nelze to označovat za kalamitu. Krkonoše mají oproti ostatním podhorským oblastem výhodu, že je v horách chladnější a vlhčí počasí a lesy se tak rychleji obnovují.

## Rezervace Suchý Vrch zasáhla proti kůrovci

Rezervace Suchý Vrch u Vrbna pod Pradědem je chráněná zejména díky borovicím starým přes 300 let, zároveň je významným paleontologickým nalezištěm. Když minulý rok rezervaci napadl kůrovec, majitel požádal o povolení výjimky k zásahu proti škůdci a správa mu vyhověla.

„Určitě občasné pokácení nějakých smrků není na škodu, právě naopak. Vznikne tímto prostor pro přirozené druhové skladby, to znamená buků, jedlí, javorů,“ [uvádí lesník Miroslav Havira.]( https://www.irozhlas.cz/zpravy-domov/kurovec-suchy-vrch-jeseniky_1812121751_jak) Citlivě vybrané a šetrně pokácené smrky mohou prý paradoxně pomoci i zdejší přírodě.

![Rezervace Suchý Vrch zasáhla proti kůrovci](https://www.irozhlas.cz/sites/default/files/styles/zpravy_fotogalerie_medium/public/uploader/suchy_vrch_190725-164417_cib.jpg?itok=P0kMTWmS)

## Nekrm brouka

Pomoci zejména menším správcům lesů se snaží i web [Nekrm brouka](http://www.nekrmbrouka.cz/). Kromě bezplatného poradenství na speciální lince nabízí návody jak šíření kůrovce včas odhalit a jak mu předcházet. Rovněž vlastníky upozorňuje, že mají zákonnou povinnost o les pečovat.

Pro řadu majitelů je ale současná kalamita jen obtížně řešitelná a svých [pozemků se proto zbavují](https://www.irozhlas.cz/ekonomika/les-cr-na-prodej-sucho-kurovec-2018-2019_1901201235_ako). 
