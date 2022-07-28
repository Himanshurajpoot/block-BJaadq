const got = {
    houses: [
        {
            name: "Starks",
            wikiLink: "http://gameofthrones.wikia.com/wiki/House_Stark",
            people: [
                {
                    name: "Eddard Stark",
                    description:
                        "Lord of Winterfell - Warden of the North - Hand of the King - Married to Catelyn (Tully) Stark",
                    image:
                        "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-eddard-stark.jpg",
                    wikiLink: "http://gameofthrones.wikia.com/wiki/Eddard_Stark"
                },
                {
                    name: "Benjen Stark",
                    description:
                        "Brother of Eddard Stark - First ranger of the Night's Watch",
                    image:
                        "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-benjen-stark.jpg",
                    wikiLink: "http://gameofthrones.wikia.com/wiki/Benjen_Stark"
                },
                {
                    name: "Robb Stark",
                    description: "Son of Eddard and Catelyn Stark - Direwolf: Grey Wind",
                    image:
                        "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-robb-stark.jpg",
                    wikiLink: "http://gameofthrones.wikia.com/wiki/Robb_Stark"
                },
                {
                    name: "Sansa Stark",
                    description: "Daughter of Eddard and Catelyn Stark - Direwolf: Lady",
                    image:
                        "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-sansa-stark.jpg",
                    wikiLink: "http://gameofthrones.wikia.com/wiki/Sansa_Stark"
                },
                {
                    name: "Arya Stark",
                    description:
                        "Daughter of Eddard and Catelyn Stark - Direwolf: Nymeria",
                    image:
                        "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-arya-stark.jpg",
                    wikiLink: "http://gameofthrones.wikia.com/wiki/Arya_Stark"
                },
                {
                    name: "Brandon Stark",
                    description: "Son of Eddard and Catelyn Stark - Direwolf: Summer",
                    image:
                        "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-brandon-stark.jpg",
                    wikiLink: "http://gameofthrones.wikia.com/wiki/Brandon_Stark"
                },
                {
                    name: "Rickon Stark Upper",
                    description: "Son of Eddard and Catelyn Stark - Direwolf: Shaggydog",
                    image:
                        "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-rickon-stark.jpg",
                    wikiLink: "http://gameofthrones.wikia.com/wiki/Rickon_Stark"
                },
                {
                    name: "Jon Snow",
                    description:
                        "Bastard son of Eddard Stark - Steweard in the Night's Watch - Direwolf: Ghost",
                    image:
                        "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-jon-snow.jpg",
                    wikiLink: "http://gameofthrones.wikia.com/wiki/Jon_Snow"
                }
            ]
        },
        {
            name: "Lannisters",
            wikiLink: "http://gameofthrones.wikia.com/wiki/House_Lannister",
            people: [
                {
                    name: "Tywin Lannister",
                    description: "Lord of Casterly Rock - Warden of the West",
                    image:
                        "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-tywin-lannister.jpg",
                    wikiLink: "http://gameofthrones.wikia.com/wiki/Tywin_Lannister"
                },
                {
                    name: "Tyrion Lannister",
                    description: "Son of Tywin Lannister - The Imp",
                    image:
                        "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-tyrion-lannister.jpg",
                    wikiLink: "http://gameofthrones.wikia.com/wiki/Tyrion_Lannister"
                },
                {
                    name: "Jaime Lannister",
                    description:
                        "The Kingslayer - Knight of the Kingsgaurd - Son of Tywin Lannister",
                    image:
                        "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-jaime-lannister.jpg",
                    wikiLink: "http://gameofthrones.wikia.com/wiki/Jaime_Lannister"
                },
                {
                    name: "Cersei Baratheon",
                    description:
                        "Married to King Robert Baratheon - Daughter of Tywin Lannister",
                    image:
                        "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-cersei-lannister.jpg",
                    wikiLink: "http://gameofthrones.wikia.com/wiki/Cersei_Lannister"
                }
            ]
        },
        {
            name: "Baratheons",
            wikiLink: "http://gameofthrones.wikia.com/wiki/House_Baratheon",
            people: [
                {
                    name: "Robert Baratheon",
                    description: "The first of his name - Lord of the Seven Kingdoms",
                    image:
                        "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-robert-baratheon.jpg",
                    wikiLink: "http://gameofthrones.wikia.com/wiki/Robert_Baratheon"
                },
                {
                    name: "Stannis Baratheon",
                    description:
                        "Lord of Dragonstone - Master of Ships - Brother of Robert Baratheon",
                    image:
                        "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-stannis-baratheon.jpg",
                    wikiLink: "http://gameofthrones.wikia.com/wiki/Stannis_Baratheon"
                },
                {
                    name: "Renly Baratheon",
                    description:
                        "Lord of Storm's End - Master of Laws - Brother of Robert Baratheon",
                    image:
                        "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-renly-baratheon.jpg",
                    wikiLink: "http://gameofthrones.wikia.com/wiki/Renly_Baratheon"
                },
                {
                    name: "Joffrey Baratheon",
                    description:
                        "Heir to the Iron Throne - Son of Robert and Cersei Baratheon",
                    image:
                        "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-joffrey-baratheon.jpg",
                    wikiLink: "http://gameofthrones.wikia.com/wiki/Joffrey_Baratheon"
                },
                {
                    name: "Tommen Baratheon",
                    description: "Son of Robert and Cersei Baratheon",
                    image:
                        "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-tommen-baratheon.jpg",
                    wikiLink: "http://gameofthrones.wikia.com/wiki/Tommen_Baratheon"
                },
                {
                    name: "Myrcella Baratheon",
                    description: "Daughter of Robert and Cersei Baratheon",
                    image:
                        "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-myrcella-baratheon.jpg",
                    wikiLink: "http://gameofthrones.wikia.com/wiki/Myrcella_Baratheon"
                }
            ]
        },
        {
            name: "Targaryens",
            wikiLink: "http://gameofthrones.wikia.com/wiki/House_Targaryen",
            people: [
                {
                    name: "Daenerys Targaryen",
                    description:
                        'Stormborn - Khaleesi of the Dothraki - The Unburnt - Mother of Dragons - Daughter of Aerys II Targaryen "The Mad King"',
                    image:
                        "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-daenerys-targaryen.jpg",
                    wikiLink: "http://gameofthrones.wikia.com/wiki/Daenerys_Targaryen"
                },
                {
                    name: "Viserys Targaryen",
                    description:
                        'The Beggar King - Son of Aerys II Targaryen "The Mad King"',
                    image:
                        "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-viserys-targaryen.jpg",
                    wikiLink: "http://gameofthrones.wikia.com/wiki/Viserys_Targaryen"
                }
            ]
        },
        {
            name: "Greyjoys",
            wikiLink: "http://gameofthrones.wikia.com/wiki/House_Greyjoy",
            people: [
                {
                    name: "Balon Greyjoy",
                    description: "Lord Reaper of Pyke - Head of House Greyjoy",
                    image:
                        "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-balon-greyjoy.jpg",
                    wikiLink: "http://gameofthrones.wikia.com/wiki/Balon_Greyjoy"
                },
                {
                    name: "Theon Greyjoy",
                    description:
                        "Ward of the Starks - Heir to the Iron Islands - Son of Balon Greyjoy",
                    image:
                        "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-theon-greyjoy.jpg",
                    wikiLink: "http://gameofthrones.wikia.com/wiki/Theon_Greyjoy"
                },
                {
                    name: "Yara Greyjoy",
                    description: "Ironborn - Son of Balon Greyjoy",
                    image:
                        "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-yara-greyjoy.jpg",
                    wikiLink: "http://gameofthrones.wikia.com/wiki/Yara_Greyjoy"
                }
            ]
        },
        {
            name: "Tyrells",
            wikiLink: "http://gameofthrones.wikia.com/wiki/House_Tyrell",
            people: [
                {
                    name: "Margaery Baratheon",
                    description:
                        "Wife of Renly Baratheon - Sister of Loras Tyrell - Granddaughter of Olenna Tyrell",
                    image:
                        "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-margaery-tyrell.jpg",
                    wikiLink: "http://gameofthrones.wikia.com/wiki/Margaery_Tyrell"
                },
                {
                    name: "Loras Tyrell",
                    description:
                        "Heir to Highgarden - Commander of the Kings Gaurd - Brother of Margaery Baratheon",
                    image:
                        "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-loras-tyrell.jpg",
                    wikiLink: "http://gameofthrones.wikia.com/wiki/Loras_Tyrell"
                }
            ]
        },
        {
            name: "Tullys",
            wikiLink: "http://gameofthrones.wikia.com/wiki/House_Tully",
            people: [
                {
                    name: "Catelyn Stark",
                    description: "Married to Eddard Stark - Daughter of Hoster Tully",
                    image:
                        "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-catelyn-tully.jpg",
                    wikiLink: "http://gameofthrones.wikia.com/wiki/Catelyn_Tully"
                },
                {
                    name: "Lysa Arryn",
                    description: "Widow of Jon Arryn - Daughter of Hoster Tully",
                    image:
                        "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-lysa-tully.jpg",
                    wikiLink: "http://gameofthrones.wikia.com/wiki/Lysa_Tully"
                },
                {
                    name: "Edmure Tully",
                    description: "Heir to Riverrun - Son of Hoster Tully",
                    image:
                        "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-edmure-tully.jpg",
                    wikiLink: "http://gameofthrones.wikia.com/wiki/Edmure_Tully"
                },
                {
                    name: "Brynden Tully",
                    description:
                        "Lord of Riverrun - Head of House Tully - Brother of Hoster Tully",
                    image:
                        "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-brynden-tully.jpg",
                    wikiLink: "http://gameofthrones.wikia.com/wiki/Brynden_Tully"
                }
            ]
        },
        {
            name: "Redwyne",
            wikiLink: "http://gameofthrones.wikia.com/wiki/House_Redwyne",
            people: [
                {
                    name: "Olenna Tyrell",
                    description: "Matriarch of House Tyrell - Queen of Thorns",
                    image:
                        "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-olenna-tyrell.jpg",
                    wikiLink: "http://gameofthrones.wikia.com/wiki/Olenna_Tyrell"
                }
            ]
        },
        {
            name: "Freys",
            wikiLink: "http://gameofthrones.wikia.com/wiki/House_Freys",
            people: [
                {
                    name: "Walder Frey",
                    description: "Lord of the Crossing - Head of House Frey",
                    image:
                        "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-walder-frey.jpg",
                    wikiLink: "http://gameofthrones.wikia.com/wiki/Walder_Frey"
                }
            ]
        },
        {
            name: "Arryns",
            wikiLink: "http://gameofthrones.wikia.com/wiki/House_Arryns",
            people: [
                {
                    name: "Jon Arryn",
                    description:
                        "Lord of the Eyrie - Head of House Arryn - Warden of the East - Defender of the Vale",
                    image:
                        "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-jon-arryn.jpg",
                    wikiLink: "http://gameofthrones.wikia.com/wiki/Jon_Arryn"
                }
            ]
        },
        {
            name: "Dothrakis",
            wikiLink: "http://gameofthrones.wikia.com/wiki/House_Dothrakis",
            people: [
                {
                    name: "Khal Drogo",
                    description:
                        "Leader of the Dothraki people - Dothraki Warlord - Married to Daenerys Targaryen",
                    image:
                        "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-khal-drogo.jpg",
                    wikiLink: "http://gameofthrones.wikia.com/wiki/Drogo"
                }
            ]
        }
    ]
};
//   Footer
// Open index.js and do the following:
// You have a file named data.js that contains the data that is accessible to you using name got.

// Note: Solve all the problems without using the reduce method.

1// Write a function called countAllPeople which counts the total number of people in got variable defined in data.js file.
function countAllPeople() {
    let sum = 0;
    for (let num of got.houses) {
        sum += num.people.length
    }
    return sum;
}
2// Write a function called peopleByHouses which counts the total number of people in different houses in the got variable defined in data.js file.
function peopleByHouses() {
    let obj = {};
    for (let num of got.houses) {
        obj[num.name] = num.people.length
    }
    return obj;
}
3// Write a function called everyone which returns a array of names of all the people in got variable.
function everyone() {
    let arr = []
    for (let num of got.houses) {
        for (let find of num.people) {
            arr.push(find.name)
        }
    }
    return arr;
}
4// Write a function called nameWithS which returns a array of names of all the people in got variable whose name includes s or S.
function nameWithS() {
    let arr = [];
    for (let num of got.houses) {
        for (let find of num.people) {
            if (find.name.includes('s') || find.name.includes('S')) {
                arr.push(find.name)
            }
        }
    }
    return arr;
}
5// Write a function called nameWithA which returns a array of names of all the people in got variable whose name includes a or A.
function nameWithA() {
    let arr = [];
    for (let num of got.houses) {
        for (let find of num.people) {
            if (find.name.includes('a') || find.name.includes('A')) {
                arr.push(find.name)
            }
        }
    }
    return arr;
}
6// Write a function called surnameWithS which returns a array of names of all the people in got variable whoes surname is starting with S(capital s).
function surnameWithS() {
    let arr = [];
    for (let num of got.houses) {
        for (let find of num.people) {
          let r = find.name.split(' ')
          if(r[1].startsWith('S')){
            arr.push(r.join(' '))
          }
            
        }
    }
    return arr;
}
7// Write a function called surnameWithA which returns a array of names of all the people in got variable whoes surname is starting with A(capital a).
function surnameWithA(){
    let arr =[];
    for(let num of got.houses){
        for(let find of num.people){
            let x = find.name.split(' ')
            if(x[x.length-1].startsWith('A')){
                arr.push(x.join(' '))
            }
        }
    }
    return arr;
}
8// Write a function called peopleNameOfAllHouses which returns an object with the key of the name of house and value will be all the people in the house in an array.
function peopleNameOfAllHouses(){
    let obj = {};
    for(let num of got.houses){
        obj[num.name]=num.people.map((elm)=>elm.name)
    }
    return obj;
}
// Footer
// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), 'with s');
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), 'surname with s');
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}
console.log(2);