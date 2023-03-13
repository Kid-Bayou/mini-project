function generate() {
    var display = [
      {
        dest_img:  "../img/greatWallOfChina.jpg",
        dest_name: "Great Wall of China",
        dest_text: "Great might be an understatement. One of the world’s largest building-construction projects, the Great Wall of China is widely thought to be about 5,500 miles (8,850 km) long; a disputed Chinese study, however, claims the length is 13,170 miles (21,200 km). Work began in the 7th century BCE and continued for two millennia. Although called a “wall,” the structure actually features two parallel walls for lengthy stretches. In addition, watchtowers and barracks dot the bulwark. One not-so-great thing about the wall, however, was its effectiveness.",
        dest_loc: "https://goo.gl/maps/N1SqDmGEdW1VnZ5NA"
      },
      {
        dest_img:  "../img/chichenItza.jpg",
        dest_name: "Chichen Itza",
        dest_text: "Chichén Itzá is a Mayan city on the Yucatán Peninsula in Mexico, which flourished in the 9th and 10th centuries CE. Under the Mayan tribe Itzá—who were strongly influenced by the Toltecs—a number of important monuments and temples were built. Among the most notable is the stepped pyramid El Castillo (“The Castle”), which rises 79 feet (24 meters) above the Main Plaza. A testament to the Mayans’ astronomical abilities, the structure features a total of 365 steps, the number of days in the solar year.",
        dest_loc: "https://goo.gl/maps/8MzbAbadJvVnnrcD6"
    },
      {
        dest_img:  "../img/petra.jpg",
        dest_name: "Petra",
        dest_text: "The ancient city of Petra, Jordan, is located in a remote valley, nestled among sandstone mountains and cliffs. It was purported to be one of the places where Moses struck a rock and water gushed forth. Later the Nabataeans, an Arab tribe, made it their capital, and during this time it flourished, becoming an important trade center, especially for spices. Noted carvers, the Nabataeans chiseled dwellings, temples, and tombs into the sandstone, which changed color with the shifting sun.",
        dest_loc: "https://goo.gl/maps/hEXP7x3NfKYP2LSz8"  
    },
      {
        dest_img:  "../img/machuPicchu.jpg",
        dest_name: "Macchu Picchu",
        dest_text: "This Incan site near Cuzco, Peru, was “discovered” in 1911 by Hiram Bingham, who believed it was Vilcabamba, a secret Incan stronghold used during the 16th-century rebellion against Spanish rule. Although that claim was later disproved, the purpose of Machu Picchu has confounded scholars. Bingham believed it was home to the “Virgins of the Sun,” women who lived in convents under a vow of chastity. Others think that it was likely a pilgrimage site, while some believe it was a royal retreat.",
        dest_loc: "https://goo.gl/maps/hEXP7x3NfKYP2LSz8"  
    },
      {
        dest_img:  "../img/christTheRedeemer.jpg",
        dest_name: "Christ the Redeemer",
        dest_text: "Christ the Redeemer, a colossal statue of Jesus, stands atop Mount Corcovado in Rio de Janeiro. Its origins date to just after World War I, when some Brazilians feared a “tide of godlessness.” They proposed a statue, which was ultimately designed by Heitor da Silva Costa, Carlos Oswald, and Paul Landowski. Construction began in 1926 and was completed five years later. The resulting monument stands 98 feet (30 meters) tall—not including its base, which is about 26 feet (8 meters) high—and its outstretched arms span 92 feet (28 meters).",
        dest_loc: "https://goo.gl/maps/hEXP7x3NfKYP2LSz8"  
    },
      {
        dest_img:  "../img/colosseum.jpg",
        dest_name: "Colosseum",
        dest_text: "The Colosseum in Rome was built in the first century by order of the Emperor Vespasian. A feat of engineering, the amphitheater measures 620 by 513 feet (189 by 156 meters) and features a complex system of vaults. It was capable of holding 50,000 spectators, who watched a variety of events. Perhaps most notable were gladiator fights, though men battling animals was also common.",
        dest_loc: "https://goo.gl/maps/8DgRNVtfcTMYZdes5"  
    },
      {
        dest_img:  "../img/tajMahal.jpg",
        dest_name: "Taj Mahal",
        dest_text: "This mausoleum complex in Agra, India, is regarded as one of the world’s most iconic monuments and is perhaps the finest example of Mughal architecture. It was built by Emperor Shah Jahān (reigned 1628–58) to honor his wife Mumtāz Maḥal (“Chosen One of the Palace”), who died in 1631 giving birth to their 14th child. It took about 22 years and 20,000 workers to construct the complex, which includes an immense garden with a reflecting pool.",
        dest_loc: "https://goo.gl/maps/8DgRNVtfcTMYZdes5"  
    },
    ];


    var show = display[Math.floor(Math.random() * display.length)];
    
    document.getElementById("display-area").innerHTML =
      '<img src="' + show.dest_img + '">' + 
      '<h2>' + show.dest_name + '</h2>' +
      '<p>' + show.dest_text + '</p>' +
      '<a href="' + show.dest_loc + '">Google Location</a>';
  }