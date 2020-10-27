// window.location.reload("www.tedxbitshyderabad.com");

//  LANDING PART STARTS
var eventDate = new Date(2020, 10, 06);
var today = new Date();
var remainingDays = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));
if (remainingDays == 1) {
    $(".landing-countdown").text(remainingDays + " Day To Go!")
} else if (remainingDays < 0) {
    $(".landing-countdown").text("6th November 2020")
} else {
    $(".landing-countdown").text(remainingDays + " Days To Go!")
}

// document.getElementsByClassName("landing-countdown")[0].innerText = remainingDays + " Days To Go!";

// console.log(remainingDays);

var factor = 0;

$(".landing-next-btn-link").click(e => {
    console.log("Helo");
    $("body").css("overflow-y", "scroll");
    $(".landing-next-btn").css("display", "none");
    $(".days-remaining").css({
        "animation-delay": "0s",
        "animation": "fadeOutContent ease 3s"
    });
    $(".landing-content").css({
        "animation-delay": "0.5s",
        "animation": "fadeOutContent ease 3s"
    });
    $(".layer-three").css({
        "animation-delay": "1s",
        "animation": "moveDown ease 3s"
    });
    $(".layer-two").css({
        "animation-delay": "1.5s",
        "animation": "moveDown ease 3s"
    });
    $(".building").css({
        "animation-delay": "2s",
        "animation": "moveDown ease 3s"
    });
    $(".landing-container").css({
        "animation": "hide ease 3s",
        "animation-iteration-count": "1",
        "animation-fill-mode": "forwards",
        "animation-delay": "2.5s",
    });
});
// LANDING PART ENDS


var speaker_info = document.getElementById("speakers-info");
var executive_info = document.getElementById("executives-info");
var archive_info = document.getElementById("archives-info");
var archive_info_2018 = document.getElementById("archives-info-2018");

// SPEAKER VARIABLES
var speaker_cards = document.getElementById("speakers");
speaker_cards = speaker_cards.children[1].children[1];
var speaker_cards_len = speaker_cards.childElementCount;
var speakers = [];
for (var i = 0; i < speaker_cards.childElementCount; i++) {
    var card = speaker_cards.children[i];
    speakers.push(card.id);
}

function Speaker(name, occupation, talk, write_up, fb, insta, lin, tw, picture) {
    this.name = name
    this.occupation = occupation
    this.talk = talk
    this.write_up = write_up
    this.fb = fb
    this.insta = insta
    this.lin = lin
    this.tw = tw
    this.picture = picture
}

var speakers_data = [];


// EXECUTIVE VARIABLES
var exec_cards = document.getElementById("executives");
exec_cards = exec_cards.children[1].children[1];
var exec_cards_len = exec_cards.childElementCount;
var executives = [];
for (var i = 0; i < exec_cards.childElementCount; i++) {
    var card = exec_cards.children[i];

    // console.log(card.id);
    executives.push(card.id);
}

function Executive(name, post, write_up, fb, insta, lin, picture) {
    this.name = name
    this.post = post
    this.write_up = write_up
    this.fb = fb
    this.insta = insta
    this.lin = lin
    this.picture = picture
}

var executives_data = [];

// SPONSORS VARIABLES
// var spons_cards = document.getElementById("sponsors");
// spons_cards = spons_cards.children[1].children[1];
// var spons_cards_len = spons_cards.childElementCount;
// var sponsors = [];
// for (var i = 0; i < spons_cards.childElementCount; i++) {
//     var card = spons_cards.children[i];

//     // console.log(card.id);
//     sponsors.push(card.id);
// }

// ARCHIVESS VARIABLES
var archive_cards = document.getElementById("archives");
archive_cards = archive_cards.children[1].children[1];
var archive_cards_len = archive_cards.childElementCount;
var archives = [];
for (var i = 0; i < archive_cards.childElementCount; i++) {
    var card = archive_cards.children[i];
    // console.log(card.id);
    archives.push(card.id);
}
function Archive(name, talk, link) {
    this.name = name
    this.talk = talk
    this.link = link
}
var archives_data = [];

// 2018 ARCHIVESS VARIABLES
var archive_cards_2018 = document.getElementById("archives_2018");
archive_cards_2018 = archive_cards_2018.children[1].children[1];
var archive_cards_2018_len = archive_cards_2018.childElementCount;
var archives_2018 = [];
for (var i = 0; i < archive_cards_2018.childElementCount; i++) {
    var card = archive_cards_2018.children[i];
    // console.log(card.id);
    archives_2018.push(card.id);
}
function Archive_2018(name, talk, link) {
    this.name = name
    this.talk = talk
    this.link = link
}
var archives_2018_data = [];

// Loading all the data from the JSON file
function loadJSON(filename, callback) {
    var speakers_file = new XMLHttpRequest();
    speakers_file.overrideMimeType("application/json");
    speakers_file.open("GET", filename, true);
    // console.log("Opening File");
    speakers_file.onreadystatechange = function() {
        // console.log("File is ready");
        if (speakers_file.readyState == 4 && (speakers_file.status == 200 || speakers_file.status == 0)) {
            // console.log("Sending Callback");
            callback(speakers_file.responseText);
        }
    }
    speakers_file.send(null);
    // console.log("Done");
}

window.onload = function() {
    // loadJSON("./json/speakers_data.json", function(response) {
        var data = {
            "speaker": [{
                    "name": "Anjali Barot",
                    "occupation": "Actor",
                    "talk_name": "Talk Name One",
                    "write_up": "An actor and social media sensation, Anjali Barot has made her presence felt across digital, print, television and OTT platforms. When she is not facing the camera, Anjali enjoys a kadak cup of chai and holidaying in the hills. A foodie by birth and someone with an infectious energy, Anjali always has a story or two to tell.",
                    "facebook": "",
                    "insta": "https://www.instagram.com/anjalibarotofficial/",
                    "linkedin": "",
                    "twitter": "",
                    "picture_loc": "./media/speakers/Anjali_Barot.png"
                }
                // {
                //     "name": "Ankit Mehrotra",
                //     "occupation": "Co-Founder & CEO at Dineout",
                //     "talk_name": "Talk Name Two",
                //     "write_up": "Ankit Mehrotra - The leading titan behind the revolutionary food-tech enterprise, Dineout, has imbibed the principle stating that \"Small things make perfection but perfection is no small thing.\" This very vision has allowed him to expand the company from a visionary start-up to one of the most used applications in the Indian market today ",
                //     "facebook": "#",
                //     "insta": "https://www.instagram.com/ankit.mehrotra/",
                //     "linkedin": "https://in.linkedin.com/in/ankitatdineout",
                //     "twitter": "#",
                //     "picture_loc": "./media/speakers/ankit.png"
                // },
                // {
                //     "name": "Adela Strakova",
                //     "occupation": "CXO - Chezuba",
                //     "talk_name": "Talk Name Four",
                //     "write_up": "Adela Strakova is the driving force behind global NGO and volunteer logistics technology, Chezuba, one of the most innovative Indian start-ups. Her success is based off the philosophy: “Help is always present. It is for us to decide how the needy obtain it.” ",
                //     "facebook": "#",
                //     "insta": "#",
                //     "linkedin": "#",
                //     "twitter": "#",
                //     "picture_loc": "./media/speakers/adela.png"
                // },
                // {
                //     "name": "Arif Chaudhary",
                //     "occupation": "B-Boy",
                //     "talk_name": "Talk Name Five",
                //     "write_up": "Arif Chaudhary is a 22-year old B-Boy from Mumbai, and a three time national champion of BC One. He is a self-taught dancer and goes by the stage name Flying Machine. What he lacks in age, he more than makes up for in talent and perseverance. ",
                //     "facebook": "https://www.facebook.com/arif.chaudhary.9",
                //     "insta": "https://www.instagram.com/flyingmachine_official/",
                //     "linkedin": "#",
                //     "twitter": "#",
                //     "picture_loc": "./media/speakers/arif.png"
                // },
                // {
                //     "name": "Lydian Nadhaswaram",
                //     "occupation": "Multi-Instrumentalist and Composer ",
                //     "talk_name": "Talk Name Six",
                //     "write_up": "As one of the most talented child prodigies of the music world, Lydian Nadhaswaram has grown up playing the piano from a starry-eyed boy to winning the TV show \"The World's Best\". ",
                //     "facebook": "https://www.facebook.com/lydianadhaswaram/",
                //     "insta": "https://www.instagram.com/lydiannadhaswaramofficial/?hl=en",
                //     "linkedin": "#",
                //     "twitter": "#",
                //     "picture_loc": "./media/speakers/lydian.png"
                // },
                // {
                //     "name": "Imtiaz Qureshi",
                //     "occupation": "Padma Shri, Master Chef at ITC.",
                //     "talk_name": "Talk Name Eight",
                //     "write_up": "A Padma Shree winning culinary wizard, Imtiaz Qureshi has been a paragon of Indian cuisine in the country, becoming a widely adored figure in the culinary scene across the country. The master chef at the ITC Hotel franchise, Imtiaz has been at the face of the brand and has constantly played a great role in developing and nurturing the future of India's cuisine..",
                //     "facebook": "https://www.facebook.com/legendofimtiazqureshi/",
                //     "insta": "https://www.instagram.com/legendofimtiaz/?hl=en",
                //     "linkedin": "https://in.linkedin.com/in/imtiaz-qureshi-269b1830",
                //     "twitter": "#",
                //     "picture_loc": "./media/speakers/imtiaz.png"
                // },
                // {
                //     "name": "Piyush Bhisekar",
                //     "occupation": "Poet, Singer-Songwriter",
                //     "talk_name": "Talk Name Eight",
                //     "write_up": "Piyush Bhisekar is a poet and an award winning singer-songwriter who released his debut EP in 2018 with six melodic, soulful and cathartic musical pieces.",
                //     "facebook": "https://www.facebook.com/PiyushBhisekar/",
                //     "insta": "https://www.instagram.com/piyush_bhisekar/?hl=en",
                //     "linkedin": "#",
                //     "twitter": "#",
                //     "picture_loc": "./media/speakers/piyush.png"
                // },
                // {
                //     "name": "Major Mohammad Ali Shah",
                //     "occupation": "Indian Theater Personality, Actor and Former Soldier",
                //     "talk_name": "Talk Name Eight",
                //     "write_up": "An award winning theatre actor, a nationally celebrated film actor, a IPL match coordinator, a respected public speaker, an IIM graduate, a brave army veteran and an international TEDx speaker, Major Mohammad Ali Shah - the master of many trades is a true Indian icon, traversing and conquering his many field.",
                //     "facebook": "#",
                //     "insta": "#",
                //     "linkedin": "#",
                //     "twitter": "#",
                //     "picture_loc": "./media/speakers/major_shah.png"
                // },
                // {
                //     "name": "Ramesh Kumar Soni",
                //     "occupation": "Co-Founder and Director at VayuJal Technologies Private Limited",
                //     "talk_name": "Talk Name Eight",
                //     "write_up": "Ramesh Kumar Soni's creation, a machine that can generate water from thin air, has the power to revolutionize the world. This could very well be the solution to all of our water woes..",
                //     "facebook": "https://www.facebook.com/rameshsoni2010",
                //     "insta": "#",
                //     "linkedin": "https://in.linkedin.com/in/ddkvrs",
                //     "twitter": "#",
                //     "picture_loc": "./media/speakers/ramesh.png"
                // }
            ]
        }
        data = data["speaker"];
        // speakers_data = JSON.parse(response);
        // console.log(data);
        for (var i in data) {
            // console.log(data[1]);
            // console.log(data[i].name);
            speakers_data.push(new Speaker(data[i].name, data[i].occupation, data[i].talk_name, data[i].write_up, data[i].facebook, data[i].insta, data[i].linkedin, data[i].twitter, data[i].picture_loc));
        }
    // });
    // loadJSON("./json/executives_data.json", function(response) {
        var data = {
            "executive" : [
                {
                    "name" : "Pulin Prabhu", 
                    "lead" : "Licensee and Curator", 
                    "write_up" : "Can tell the difference between Space Grey and Silver. Catch me behind the lens or staring at the screen trying to work new ways of entwining Technology, Managment and Finance.", 
                    "facebook" : "https://www.facebook.com/pulinprabhu02/", 
                    "insta" : "https://www.instagram.com/pulinprabhu/", 
                    "linkedin" : "https://www.linkedin.com/in/pulinprabhu", 
                    "picture_loc" : "./media/team/Pulin_Prabhu.jpg"
                },
                {
                    "name" : "Sahil Sheth", 
                    "lead" : "Curator", 
                    "write_up" : "Believes smart work is more effective than hard work.", 
                    "facebook" : "https://www.facebook.com/sahil.sheth.353", 
                    "insta" : "https://www.instagram.com/sahil_sheth5", 
                    "linkedin" : "https://www.linkedin.com/in/sahilsheth263", 
                    "picture_loc" : "./media/team/Sahil_Sheth.jpg"
                },
                {
                    "name" : "Romit Kankaria", 
                    "lead" : "Curator", 
                    "write_up" : "Fascinated by reel stuff, trying to achieve something real and make things happen. Movie buff. Cricket Geek.", 
                    "facebook" : "#", 
                    "insta" : "https://www.instagram.com/romitv7/", 
                    "linkedin" : "https://www.linkedin.com/in/romit-vinod-kankaria-b50408177/", 
                    "picture_loc" : "./media/team/Romit_Kankaria.jpg"
                },
                {
                    "name" : "Himanshu Joshi", 
                    "lead" : "Curator", 
                    "write_up" : "", 
                    "facebook" : "https://www.facebook.com/himanshu.joshi.129794", 
                    "insta" : "https://www.instagram.com/thehimanshuj/", 
                    "linkedin" : "https://www.linkedin.com/in/himanshu-joshi-512a1a184", 
                    "picture_loc" : "./media/team/Himanshu_Joshi.jpg"
                },
                {
                    "name" : "Harsh Agarwal", 
                    "lead" : "Exective Producer", 
                    "write_up" : "Have a passion for playing with numbers, be it the binaries of code or the intricacies of the stock market. Give me a situation, and I'm ready to grow from it, and given a chance, make more from it.", 
                    "facebook" : "#", 
                    "insta" : "https://www.instagram.com/harsh_2703/", 
                    "linkedin" : "https://www.linkedin.com/in/harshagarwal2703/", 
                    "picture_loc" : "./media/team/Harsh_Agarwal.jpg"
                },
                {
                    "name" : "Jimil Shah", 
                    "lead" : "Technical Director", 
                    "write_up" : "An ordinary metalhead wanting to write code like Zuckerberg, poetry like Bukowski, growl like Mikael Akerfeldt and play drums like Gavin Harrison.", 
                    "facebook" : "#", 
                    "insta" : "https://www.instagram.com/postrockfanboy", 
                    "linkedin" : "https://www.linkedin.com/in/jimilproggrammer/", 
                    "picture_loc" : "./media/team/Jimil_Shah.jpg"
                },
                {
                    "name" : "Saurabh Rane", 
                    "lead" : "Creative Director", 
                    "write_up" : "Manifesting the vision of TEDxSPIT though digital prints, liberal yet detail-oriented work that makes you go wow!", 
                    "facebook" : "#", 
                    "insta" : "https://www.instagram.com/saurabhrane11", 
                    "linkedin" : "https://in.linkedin.com/in/saurabhrane1199", 
                    "picture_loc" : "./media/team/Saurabh_Rane.jpg"
                },
                {
                    "name" : "Vinayak Iyer", 
                    "lead" : "Content Strategist", 
                    "write_up" : "Adventurous. Gregarious. Persistent. ", 
                    "facebook" : "#", 
                    "insta" : "https://www.instagram.com/vinayak_iyer_/", 
                    "linkedin" : "https://www.linkedin.com/in/vinayak-iyer-/", 
                    "picture_loc" : "./media/team/Vinayak_Iyer.jpg"
                },
                {
                    "name" : "Urja Kulkarni", 
                    "lead" : "Content Strategist", 
                    "write_up" : "She’s a foodie who is always up for new adventures.", 
                    "facebook" : "#", 
                    "insta" : "https://www.instagram.com/urjax/", 
                    "linkedin" : "https://www.linkedin.com/in/urja-kulkarni/", 
                    "picture_loc" : "./media/team/Urja_Kulkarni.jpg"
                },
                {
                    "name" : "Raksha Jain", 
                    "lead" : "Finance Head", 
                    "write_up" : "A knack for creativity, combing that with the principles of design thinking she strives to come up with solutions to complex problems. New found interest in finance just makes the entire process more wholesome.", 
                    "facebook" : "https://www.facebook.com/raksha.jain.167", 
                    "insta" : "https://www.instagram.com/rakshaajain/?hl=en", 
                    "linkedin" : "https://www.linkedin.com/in/raksha-jain13/", 
                    "picture_loc" : "./media/team/Raksha_Jain.jpg"
                },
                {
                    "name" : "Parth Kitawat", 
                    "lead" : "Finance Head", 
                    "write_up" : "He’s passionate about everything related to finance and startups. He believes that the biggest risk is in not taking any risk.", 
                    "facebook" : "#", 
                    "insta" : "https://www.instagram.com/parthkitawat/", 
                    "linkedin" : "https://www.linkedin.com/in/parth-kitawat-4a8b62146/", 
                    "picture_loc" : "./media/team/Parth_Kitawat.jpg"
                },
                {
                    "name" : "Kareena Redij", 
                    "lead" : "PR Head", 
                    "write_up" : "She’s audacious, bright and a silly intellect. Being quick-witted is her superpower. She’s here to pitch in new ideas and add a hint of fun in all that she does.", 
                    "facebook" : "#", 
                    "insta" : "https://instagram.com/kareenaredij?igshid=u32x5l8zfhev", 
                    "linkedin" : "www.linkedin.com/in/kareena-redij", 
                    "picture_loc" : "./media/team/Kareena_Redij.jpg"
                },
                {
                    "name" : "Taksh Soni", 
                    "lead" : "PR Head", 
                    "write_up" : "Colour blind, but coloured mind. Knows his way through people very well!", 
                    "facebook" : "#", 
                    "insta" : "https://www.instagram.com/_takshsoni_", 
                    "linkedin" : "https://www.linkedin.com/in/taksh-soni-444990173/", 
                    "picture_loc" : "./media/team/Taksh_Soni.jpg"
                },
                {
                    "name" : "Vedant Mathur", 
                    "lead" : "Hospitality Head", 
                    "write_up" : "He lives his life one day at a time, with a fresh-baked cookie, maybe a coffee, and maybe some chocolates, if he likes you he’ll probably get you one too.",
                    "facebook" : "https://www.facebook.com/vedant.mathur.75/", 
                    "insta" : "https://www.instagram.com/v_mathur/",
                    "linkedin" : "https://www.linkedin.com/in/vedant-mathur/", 
                    "picture_loc" : "./media/team/Vedant_Mathur.jpg"
                },
                {
                    "name" : "Niharika Kadam", 
                    "lead" : "Operations Head", 
                    "write_up" : "Someone who gets well with all kinds of people and can be assertive without being rude!",
                    "facebook" : "#", 
                    "insta" : "https://www.instagram.com/niharikakadam",
                    "linkedin" : "https://www.linkedin.com/in/niharika-kadam-ab32071b8/", 
                    "picture_loc" : "./media/team/Niharika_Kadam.jpg"
                }
            ]
        }
        data = data["executive"];
        // speakers_data = JSON.parse(response);
        // console.log(data);
        for (var i in data) {
            // console.log(data[1]);
            // console.log(data[i].name);
            // console.log(data[i].picture_loc);
            executives_data.push(new Executive(data[i].name, data[i].lead, data[i].write_up, data[i].facebook, data[i].insta, data[i].linkedin, data[i].picture_loc));
        }
    // });
    // loadJSON("./json/archives_data.json", function(response) {
        data = {
            "archive" : [
                {
                    "name" : "Ayush Mehra", 
                    "talk" : "Enjoy the Jounrey", 
                    "link" : "https://www.youtube.com/embed/le6eNngljto"
                },
                {
                    "name" : "Kaam Bhari", 
                    "talk" : "Living Life One Verse at a Time", 
                    "link" : "https://www.youtube.com/embed/lGJoaVHYifU"
                },
                {
                    "name" : "Sumeet Vyas", 
                    "talk" : "Find Your Fuel", 
                    "link" : "https://www.youtube.com/embed/aWCDFi2tZiY"
                },
                {
                    "name" : "Eisha Chopra", 
                    "talk" : "The Power of an Audience to Change Society", 
                    "link" : "https://www.youtube.com/embed/zX-6UFQuiXk"
                },
                {
                    "name" : "Kavish Sinha", 
                    "talk" : "Passion, What?", 
                    "link" : "https://www.youtube.com/embed/eEknyfpLdLI"
                },
                {
                    "name" : "Ameya Kanawade", 
                    "talk" : "Fumbling My Way to Fluency, How I got over My Stutter",
                    "link" : "https://www.youtube.com/embed/xrXHYaUUNGU"
                },
                {
                    "name" : "Aakshaye Rathi", 
                    "talk" : "The Impact of OTT Platforms on Cinema", 
                    "link" : "https://www.youtube.com/embed/f8ppJS210RA"
                },
                {
                    "name" : "Ali Mustafa Shaikh", 
                    "talk" : "Crowd-sourcing Data for Machine Learning", 
                    "link" : "https://www.youtube.com/embed/wwZKOmoNxMo"
                }
            ]
        }
        data = data["archive"];
        // speakers_data = JSON.parse(response);
        // console.log(data);
        for (var i in data) {
            // console.log(data[1]);
            // console.log(data[i].name);
            archives_data.push(new Archive(data[i].name, data[i].talk, data[i].link));
        }
    // });
    // loadJSON("./json/archives_data_2018.json", function(response) {
        var data = {
            "archive" : [
                {
                    "name" : "Vikas Gupta", 
                    "talk" : "Finding Yourself", 
                    "link" : "https://www.youtube.com/embed/xjfVrWyU5oM"
                },
                {
                    "name" : "Manish Advani", 
                    "talk" : "The Art of Story Telling", 
                    "link" : "https://www.youtube.com/embed/-eXikXK9SZ8"
                },
                {
                    "name" : "Nidhika Bahl", 
                    "talk" : "The Art of Creating Meaningful and Everlasting Relationships", 
                    "link" : "https://www.youtube.com/embed/6YVMYI2qMFI"
                },
                {
                    "name" : "Rashi Mal", 
                    "talk" : "Choose the Life You Want to Live", 
                    "link" : "https://www.youtube.com/embed/3GLsR29QHAU"
                },
                {
                    "name" : "Swapan Rajdev", 
                    "talk" : "The Age of Artificial Intelligence", 
                    "link" : "https://www.youtube.com/embed/5FP0oqRUfHY"
                },
                {
                    "name" : "Mohsin Memon", 
                    "talk" : "Games can solve real problems",
                    "link" : "https://www.youtube.com/embed/7gT5gO107nE"
                },
                {
                    "name" : "Max Fernandes", 
                    "talk" : "Exploring the School of Art", 
                    "link" : "https://www.youtube.com/embed/f5kLOBzF34g"
                },
                {
                    "name" : "Robin Chaurasia", 
                    "talk" : "Social Change", 
                    "link" : "https://www.youtube.com/embed/qQ836w2kWf8"
                }
            ]
        }
        data = data["archive"];
        // speakers_data = JSON.parse(response);
        // console.log(data);
        for (var i in data) {
            // console.log(data[1]);
            // console.log(data[i].name);
            archives_2018_data.push(new Archive_2018(data[i].name, data[i].talk, data[i].link));
        }
    // });
}

window.addEventListener("card-arrow", function(e) {
    // console.log("Hello");
});

if (screen.width > 1024) {

    function shiftScaleUp(j, section_name) {
        j = j - 1;

        if (section_name == "speakers") {
            if (j == 0) {
                for (var i = 1; i < speaker_cards_len; i++) {
                    card = speaker_cards.children[i];
                    card.classList.add('shiftCardRight90');
                }
            } else if (j == (speaker_cards_len - 1)) {
                for (var i = 0; i < (speaker_cards_len - 1); i++) {
                    card = speaker_cards.children[i];
                    card.classList.add('shiftCardLeft90');
                }
            } else {
                for (var i = 0; i < j; i++) {
                    var card = speaker_cards.children[i];
                    card.classList.add('shiftCardLeft50');
                }

                for (var i = (j + 1); i < speaker_cards.childElementCount; i++) {
                    var card = speaker_cards.children[i];
                    card.classList.add('shiftCardRight50');
                }
            }
        } else if (section_name == "executives") {
            if (j == 0) {
                for (var i = 1; i < exec_cards_len; i++) {
                    card = exec_cards.children[i];
                    card.classList.add('shiftCardRight90');
                }
            } else if (j == (exec_cards_len - 1)) {
                for (var i = 0; i < (exec_cards_len - 1); i++) {
                    card = exec_cards.children[i];
                    card.classList.add('shiftCardLeft90');
                }
            } else {
                for (var i = 0; i < j; i++) {
                    var card = exec_cards.children[i];
                    card.classList.add('shiftCardLeft50');
                }

                for (var i = (j + 1); i < exec_cards.childElementCount; i++) {
                    var card = exec_cards.children[i];
                    card.classList.add('shiftCardRight50');
                }
            }
        } else if (section_name == "sponsors") {
            // if (j == 0) {
            //     for (var i = 1; i < spons_cards_len; i++) {
            //         card = spons_cards.children[i];
            //         card.classList.add('shiftCardRight90');
            //     }
            // } else if (j == (spons_cards_len - 1)) {
            //     for (var i = 0; i < (spons_cards_len - 1); i++) {
            //         card = spons_cards.children[i];
            //         card.classList.add('shiftCardLeft90');
            //     }
            // } else {
            //     for (var i = 0; i < j; i++) {
            //         var card = spons_cards.children[i];
            //         card.classList.add('shiftCardLeft50');
            //     }

            //     for (var i = (j + 1); i < spons_cards.childElementCount; i++) {
            //         var card = spons_cards.children[i];
            //         card.classList.add('shiftCardRight50');
            //     }
            // }
        } else if (section_name == "archive") {
            if (j == 0) {
                for (var i = 1; i < archive_cards_len; i++) {
                    card = archive_cards.children[i];
                    card.classList.add('shiftCardRight90');
                }
            } else if (j == (archive_cards_len - 1)) {
                for (var i = 0; i < (archive_cards_len - 1); i++) {
                    card = archive_cards.children[i];
                    card.classList.add('shiftCardLeft90');
                }
            } else {
                for (var i = 0; i < j; i++) {
                    var card = archive_cards.children[i];
                    card.classList.add('shiftCardLeft50');
                }

                for (var i = (j + 1); i < archive_cards.childElementCount; i++) {
                    var card = archive_cards.children[i];
                    card.classList.add('shiftCardRight50');
                }
            }
        } else if (section_name == "archive_2018") {
            if (j == 0) {
                for (var i = 1; i < archive_cards_2018_len; i++) {
                    card = archive_cards_2018.children[i];
                    card.classList.add('shiftCardRight90');
                }
            } else if (j == (archive_cards_2018_len - 1)) {
                for (var i = 0; i < (archive_cards_2018_len - 1); i++) {
                    card = archive_cards_2018.children[i];
                    card.classList.add('shiftCardLeft90');
                }
            } else {
                for (var i = 0; i < j; i++) {
                    var card = archive_cards_2018.children[i];
                    card.classList.add('shiftCardLeft50');
                }

                for (var i = (j + 1); i < archive_cards_2018.childElementCount; i++) {
                    var card = archive_cards_2018.children[i];
                    card.classList.add('shiftCardRight50');
                }
            }
        }
    }

    function shiftScaleDown(j, section_name) {
        j = j - 1;

        if (section_name == "speakers") {
            if (j == 0) {
                for (var i = 1; i < speaker_cards_len; i++) {
                    card = speaker_cards.children[i];
                    card.classList.remove('shiftCardRight90');
                }
            } else if (j == (speaker_cards_len - 1)) {
                for (var i = 0; i < (speaker_cards_len - 1); i++) {
                    card = speaker_cards.children[i];
                    card.classList.remove('shiftCardLeft90');
                }
            } else {
                for (var i = 0; i < j; i++) {
                    var card = speaker_cards.children[i];
                    card.classList.remove('shiftCardLeft50');
                }

                for (var i = (j + 1); i < speaker_cards.childElementCount; i++) {
                    var card = speaker_cards.children[i];
                    card.classList.remove('shiftCardRight50');
                }
            }
        } else if (section_name == "executives") {
            if (j == 0) {
                for (var i = 1; i < exec_cards_len; i++) {
                    card = exec_cards.children[i];
                    card.classList.remove('shiftCardRight90');
                }
            } else if (j == (exec_cards_len - 1)) {
                for (var i = 0; i < (exec_cards_len - 1); i++) {
                    card = exec_cards.children[i];
                    card.classList.remove('shiftCardLeft90');
                }
            } else {
                for (var i = 0; i < j; i++) {
                    var card = exec_cards.children[i];
                    card.classList.remove('shiftCardLeft50');
                }

                for (var i = (j + 1); i < exec_cards.childElementCount; i++) {
                    var card = exec_cards.children[i];
                    card.classList.remove('shiftCardRight50');
                }
            }
        } else if (section_name == "sponsors") {
            // if (j == 0) {
            //     for (var i = 1; i < spons_cards_len; i++) {
            //         card = spons_cards.children[i];
            //         card.classList.remove('shiftCardRight90');
            //     }
            // } else if (j == (spons_cards_len - 1)) {
            //     for (var i = 0; i < (spons_cards_len - 1); i++) {
            //         card = spons_cards.children[i];
            //         card.classList.remove('shiftCardLeft90');
            //     }
            // } else {
            //     for (var i = 0; i < j; i++) {
            //         var card = spons_cards.children[i];
            //         card.classList.remove('shiftCardLeft50');
            //     }

            //     for (var i = (j + 1); i < spons_cards.childElementCount; i++) {
            //         var card = spons_cards.children[i];
            //         card.classList.remove('shiftCardRight50');
            //     }
            // }
        } else if (section_name == "archive") {
            if (j == 0) {
                for (var i = 1; i < archive_cards_len; i++) {
                    card = archive_cards.children[i];
                    card.classList.remove('shiftCardRight90');
                }
            } else if (j == (archive_cards_len - 1)) {
                for (var i = 0; i < (archive_cards_len - 1); i++) {
                    card = archive_cards.children[i];
                    card.classList.remove('shiftCardLeft90');
                }
            } else {
                for (var i = 0; i < j; i++) {
                    var card = archive_cards.children[i];
                    card.classList.remove('shiftCardLeft50');
                }

                for (var i = (j + 1); i < archive_cards.childElementCount; i++) {
                    var card = archive_cards.children[i];
                    card.classList.remove('shiftCardRight50');
                }
            }
        } else if (section_name == "archive_2018") {
            if (j == 0) {
                for (var i = 1; i < archive_cards_2018_len; i++) {
                    card = archive_cards_2018.children[i];
                    card.classList.remove('shiftCardRight90');
                }
            } else if (j == (archive_cards_2018_len - 1)) {
                for (var i = 0; i < (archive_cards_2018_len - 1); i++) {
                    card = archive_cards_2018.children[i];
                    card.classList.remove('shiftCardLeft90');
                }
            } else {
                for (var i = 0; i < j; i++) {
                    var card = archive_cards_2018.children[i];
                    card.classList.remove('shiftCardLeft50');
                }

                for (var i = (j + 1); i < archive_cards_2018.childElementCount; i++) {
                    var card = archive_cards_2018.children[i];
                    card.classList.remove('shiftCardRight50');
                }
            }
        }
    }


    // Write function to change values of speaker-info class div based on button click.
    function generate(j, type) {

        j = j - 1;

        if (type == "speakers") {
            var speaker = speakers_data[j];
            var text = speaker_info.children[0].children;
            var image = speaker_info.children[1].children;
            var social = speaker_info.children[0].children[4];

            text[0].innerHTML = speaker["name"];
            // console.log(speaker["name"]);
            text[1].innerHTML = speaker["occupation"];
            // console.log(speaker["occupation"]);
            text[2].innerText = speaker["talk"];
            // console.log(speaker["talk"]);
            text[3].innerText = speaker["write_up"];
            // console.log(speaker["write_up"]);

            social.children[0].children[0].href = speaker["lin"];
            if (speaker["lin"] == "#") {
                social.children[0].style.display = "none";
            }
            // console.log(executive["lin"]);
            social.children[1].children[0].href = speaker["insta"];
            if (speaker["insta"] == "#") {
                social.children[1].style.display = "none";
            }
            // console.log(executive["insta"]);
            social.children[2].children[0].href = speaker["fb"];
            if (speaker["fb"] == "#") {
                social.children[2].style.display = "none";
            }
            // console.log(executive["fb"]);

            image[0].srcset = speaker["picture"];

            speaker_info.classList.remove('pull-animation');
            speaker_info.classList.add('drop-animation');
        } else if (type == "executives") {
            var executive = executives_data[j];
            executive_info.children[0].children[0]
            var text = executive_info.children[0].children[0].children;
            var image = executive_info.children[1].children;
            var social = executive_info.children[0].children[0].children[3];

            text[0].innerHTML = executive["name"];
            // console.log(executive["name"]);
            text[1].innerHTML = executive["post"];
            // console.log(executive["post"]);
            text[2].innerText = executive["write_up"];
            // console.log(executive["write_up"]);

            social.children[0].children[0].href = executive["lin"];
            // console.log(executive["lin"]);
            social.children[1].children[0].href = executive["insta"];
            // console.log(executive["insta"]);
            social.children[2].children[0].href = executive["fb"];
            // console.log(executive["fb"]);

            image[0].srcset = executive["picture"];
            // console.log(executive["picture"]);

            if (j == 9 || j == 10) {
                executive_info.children[1].children[1].style.background = "radial-gradient(circle at 55%, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 70%)";
            }

            executive_info.classList.remove('pull-animation');
            executive_info.classList.add('drop-animation');
            // executive_info.style.display = "flex";
        } else if (type == "archives") {
            var archive = archives_data[j];
            var video = archive_info.children[0].children[0];

            // console.log(archive["link"]);
            video.src = archive["link"];

            archive_info.style.display = "block";
        } else if (type == "archives_2018") {
            var archive = archives_2018_data[j];
            var video = archive_info_2018.children[0].children[0];

            // console.log(archive["link"]);
            video.src = archive["link"];

            archive_info_2018.style.display = "block";
        }
    }

    $("#close-btn-speakers").click(e => {
        var social = speaker_info.children[0].children[4];
        social.children[0].style.display = "block";
        social.children[1].style.display = "block";
        social.children[2].style.display = "block";
        speaker_info.classList.add('pull-animation');
        speaker_info.classList.remove('drop-animation');
        // speaker_info.style.display = "none";
    });
    $("#close-btn-executives").click(e => {
        // if(j == 9 || j == 10){
        //     executive_info.children[1].children[1].style.background = "none";
        // }
        executive_info.classList.add('pull-animation');
        executive_info.classList.remove('drop-animation');
        // executive_info.style.display = "none";
    });
    $("#archives-info").click(e => {
        archive_info.children[0].children[0].src = "";
        archive_info.style.display = "none";
    });
    $("#archives-info-2018").click(e => {
        archive_info_2018.children[0].children[0].src = "";
        archive_info_2018.style.display = "none";
    });


    ///// SCROLL FUNCTIONS /////
    const margin = window.innerWidth * 5 / 100;
    const cardWidth = 375;

    // Speakers Variables
    const noOfSpeakers = 1;
    let counter_sp = 0;
    let pushedBy_sp = 0;

    // Executive Variables
    const noOfExecutives = 15;
    let counter_ex = 0;
    let pushedBy_ex = 0;

    // Sponsors Variables
    // const noOfSponsors = 12;
    // let counter_spon = 0;
    // let pushedBy_spon = 0;

    // Archive Variables
    const noOfArchives = 8;
    let counter_ar = 0;
    let pushedBy_ar = 0;

    // document.getElementsByClassName("section")[i].children[1].children[1].clientWidth / 395
    // document.getElementsByClassName("left-button")[i].parentElement.parentElement.parentElement.id
    $(".left-button").on('click', function() {
        // console.log($(this));
        // console.log($(this).parent().parent().parent().attr('id'));
        var section = $(this).parent().parent().parent().attr('id');
        // console.log($('#' + section));
        // console.log($('#' + section).children(".real-content").children(".cards"));
        var cards = $('#' + section).children(".real-content").children(".cards");
        // console.log(cards);
        var sectionWidth = cards.innerWidth();
        var noOfCards = Math.floor(sectionWidth / cardWidth);
        var noOfActualCards = 0;
        var counter = 0;
        var pushedBy = 0;
        switch (section) {
            case ("speakers"):
                {
                    noOfActualCards = noOfSpeakers;
                    counter = counter_sp;
                    pushedBy = pushedBy_sp;
                    break;
                }
            case ("executives"):
                {
                    noOfActualCards = noOfExecutives;
                    counter = counter_ex;
                    pushedBy = pushedBy_ex;
                    break;
                }
            // case ("sponsors"):
            //     {
            //         noOfActualCards = noOfSponsors;
            //         counter = counter_spon;
            //         pushedBy = pushedBy_spon;
            //         break;
            //     }
            case ("archives"):
                {
                    noOfActualCards = noOfArchives;
                    counter = counter_ar;
                    pushedBy = pushedBy_ar;
                    break;
                }
            case ("archives_2018"):
                {
                    noOfActualCards = noOfArchives;
                    counter = counter_ar;
                    pushedBy = pushedBy_ar;
                    break;
                }
        }
        var num = noOfActualCards - noOfCards;
        if (counter > 1) {
            console.log(counter);
            cards.css("transition", "transform 0.4s ease-in-out");
            pushedBy -= cardWidth;
            console.log(pushedBy);
            cards.css("transform", 'translateX(-' + pushedBy + 'px)');
            counter--;
            switch (section) {
                case ("speakers"):
                    {
                        pushedBy_sp = pushedBy;
                        counter_sp = counter;
                        break;
                    }
                case ("executives"):
                    {
                        pushedBy_ex = pushedBy;
                        counter_ex = counter;
                        break;
                    }
                // case ("sponsors"):
                //     {
                //         pushedBy_spon = pushedBy;
                //         counter_spon = counter;
                //         break;
                //     }
                case ("archives"):
                    {
                        pushedBy_ar = pushedBy;
                        counter_ar = counter;
                        break;
                    }
                case ("archives_2018"):
                    {
                        pushedBy_ar = pushedBy;
                        counter_ar = counter;
                        break;
                    }
            }
        } else if (counter == 1 || counter == num) {
            console.log(counter);
            cards.css("transition", "transform 0.4s ease-in-out");
            pushedBy -= (margin + cardWidth);
            if (pushedBy < 0) {
                pushedBy = 0;
            }
            console.log(pushedBy);
            cards.css("transform", 'translateX(-' + pushedBy + 'px)');
            counter--;
            switch (section) {
                case ("speakers"):
                    {
                        pushedBy_sp = pushedBy;
                        counter_sp = counter;
                        break;
                    }
                case ("executives"):
                    {
                        pushedBy_ex = pushedBy;
                        counter_ex = counter;
                        break;
                    }
                // case ("sponsors"):
                //     {
                //         pushedBy_spon = pushedBy;
                //         counter_spon = counter;
                //         break;
                //     }
                case ("archives"):
                    {
                        pushedBy_ar = pushedBy;
                        counter_ar = counter;
                        break;
                    }
                case ("archives_2018"):
                    {
                        pushedBy_ar = pushedBy;
                        counter_ar = counter;
                        break;
                    }
            }
        } // else if(counter == 0){
        //     console.log(counter);
        //     cards.css("transition", "transform 0.4s ease-in-out");
        //     pushedBy -= (margin);
        //     cards.css("transform", 'translateX(-'+pushedBy+'px)');
        //     counter--;
        //     switch(section){
        //         case("speakers"):{
        //             pushedBy_sp = pushedBy;
        //             counter_sp = counter;
        //             break;
        //         }
        //         case("executives"):{
        //             pushedBy_ex = pushedBy;
        //             counter_ex = counter;
        //             break;
        //         }
        //         case("sponsors"):{
        //             pushedBy_spon = pushedBy;
        //             counter_spon = counter;
        //             break;
        //         }
        //         case("archives"):{
        //             pushedBy_ar = pushedBy;
        //             counter_ar = counter;
        //             break;
        //         }
        //     }
        // }
    });
    $(".right-button").on('click', function() {
        // console.log($(this));
        // console.log($(this).parent().parent().parent().attr('id'));
        var section = $(this).parent().parent().parent().attr('id');
        // console.log($('#' + section));
        // console.log($('#' + section).children(".real-content").children(".cards"));
        var cards = $('#' + section).children(".real-content").children(".cards");
        var sectionWidth = cards.innerWidth();
        var noOfCards = Math.floor(sectionWidth / cardWidth);
        // console.log(noOfCards);
        var noOfActualCards = 0;
        var counter = 0;
        var pushedBy = 0;
        switch (section) {
            case ("speakers"):
                {
                    noOfActualCards = noOfSpeakers;
                    counter = counter_sp;
                    pushedBy = pushedBy_sp;
                    break;
                }
            case ("executives"):
                {
                    noOfActualCards = noOfExecutives;
                    counter = counter_ex;
                    pushedBy = pushedBy_ex;
                    break;
                }
            // case ("sponsors"):
            //     {
            //         noOfActualCards = noOfSponsors;
            //         counter = counter_spon;
            //         pushedBy = pushedBy_spon;
            //         break;
            //     }
            case ("archives"):
                {
                    noOfActualCards = noOfArchives;
                    counter = counter_ar;
                    pushedBy = pushedBy_ar;
                    break;
                }
            case ("archives_2018"):
                {
                    noOfActualCards = noOfArchives;
                    counter = counter_ar;
                    pushedBy = pushedBy_ar;
                    break;
                }
        }
        var num = noOfActualCards - noOfCards;
        if (counter == 0) {
            console.log(counter);
            cards.css("transition", "transform 0.4s ease-in-out");
            pushedBy += (margin + cardWidth);
            cards.css("transform", 'translateX(-' + pushedBy + 'px)');
            counter++;
            switch (section) {
                case ("speakers"):
                    {
                        pushedBy_sp = pushedBy;
                        counter_sp = counter;
                        break;
                    }
                case ("executives"):
                    {
                        pushedBy_ex = pushedBy;
                        counter_ex = counter;
                        break;
                    }
                // case ("sponsors"):
                //     {
                //         pushedBy_spon = pushedBy;
                //         counter_spon = counter;
                //         break;
                //     }
                case ("archives"):
                    {
                        pushedBy_ar = pushedBy;
                        counter_ar = counter;
                        break;
                    }
                case ("archives_2018"):
                    {
                        pushedBy_ar = pushedBy;
                        counter_ar = counter;
                        break;
                    }
            }
        } else if (counter < num) {
            console.log(counter);
            cards.css("transition", "transform 0.4s ease-in-out");
            pushedBy += cardWidth;
            cards.css("transform", 'translateX(-' + pushedBy + 'px)');
            counter++;
            switch (section) {
                case ("speakers"):
                    {
                        pushedBy_sp = pushedBy;
                        counter_sp = counter;
                        break;
                    }
                case ("executives"):
                    {
                        pushedBy_ex = pushedBy;
                        counter_ex = counter;
                        break;
                    }
                // case ("sponsors"):
                //     {
                //         pushedBy_spon = pushedBy;
                //         counter_spon = counter;
                //         break;
                //     }
                case ("archives"):
                    {
                        pushedBy_ar = pushedBy;
                        counter_ar = counter;
                        break;
                    }
                case ("archives_2018"):
                    {
                        pushedBy_ar = pushedBy;
                        counter_ar = counter;
                        break;
                    }
            }
        } // else if(counter == num){
        //     console.log(counter);
        //     cards.css("transition", "transform 0.4s ease-in-out");
        //     pushedBy += margin;
        //     cards.css("transform", 'translateX(-'+pushedBy+'px)');
        //     counter++;
        //     switch(section){
        //         case("speakers"):{
        //             pushedBy_sp = pushedBy;
        //             counter_sp = counter;
        //             break;
        //         }
        //         case("executives"):{
        //             pushedBy_ex = pushedBy;
        //             counter_ex = counter;
        //             break;
        //         }
        //         case("sponsors"):{
        //             pushedBy_spon = pushedBy;
        //             counter_spon = counter;
        //             break;
        //         }
        //         case("archives"):{
        //             pushedBy_ar = pushedBy;
        //             counter_ar = counter;
        //             break;
        //         }
        //     }
        // }
    });

}
// Tablets View
else if (screen.width >= 768 && screen.width <= 1024) {

    function shiftScaleUp(j, section_name) {
        j = j - 1;

        if (section_name == "speakers") {
            console.log("Hello");
            // generate(j, section_name);
            // if (j == 0) {
            // 	for (var i = 1; i < speaker_cards_len; i++) {
            // 		card = speaker_cards.children[i];
            // 		card.classList.add('shiftCardRight90');
            // 	}
            // } else if (j == (speaker_cards_len - 1)) {
            // 	for (var i = 0; i < (speaker_cards_len - 1); i++) {
            // 		card = speaker_cards.children[i];
            // 		card.classList.add('shiftCardLeft90');
            // 	}
            // } else {
            // 	for (var i = 0; i < j; i++) {
            // 		var card = speaker_cards.children[i];
            // 		card.classList.add('shiftCardLeft50');
            // 	}

            // 	for (var i = (j + 1); i < speaker_cards.childElementCount; i++) {
            // 		var card = speaker_cards.children[i];
            // 		card.classList.add('shiftCardRight50');
            // 	}
            // }
        } else if (section_name == "executives") {
            console.log("Hello");
            // generate(j, section_name);
            // if (j == 0) {
            // 	for (var i = 1; i < exec_cards_len; i++) {
            // 		card = exec_cards.children[i];
            // 		card.classList.add('shiftCardRight90');
            // 	}
            // } else if (j == (exec_cards_len - 1)) {
            // 	for (var i = 0; i < (exec_cards_len - 1); i++) {
            // 		card = exec_cards.children[i];
            // 		card.classList.add('shiftCardLeft90');
            // 	}
            // } else {
            // 	for (var i = 0; i < j; i++) {
            // 		var card = exec_cards.children[i];
            // 		card.classList.add('shiftCardLeft50');
            // 	}

            // 	for (var i = (j + 1); i < exec_cards.childElementCount; i++) {
            // 		var card = exec_cards.children[i];
            // 		card.classList.add('shiftCardRight50');
            // 	}
            // }
        } else if (section_name == "sponsors") {
            // if (j == 0) {
            //     for (var i = 1; i < spons_cards_len; i++) {
            //         card = spons_cards.children[i];
            //         card.classList.add('shiftCardRight90');
            //     }
            // } else if (j == (spons_cards_len - 1)) {
            //     for (var i = 0; i < (spons_cards_len - 1); i++) {
            //         card = spons_cards.children[i];
            //         card.classList.add('shiftCardLeft90');
            //     }
            // } else {
            //     for (var i = 0; i < j; i++) {
            //         var card = spons_cards.children[i];
            //         card.classList.add('shiftCardLeft50');
            //     }

            //     for (var i = (j + 1); i < spons_cards.childElementCount; i++) {
            //         var card = spons_cards.children[i];
            //         card.classList.add('shiftCardRight50');
            //     }
            // }
        } else if (section_name == "archive") {
            if (j == 0) {
                for (var i = 1; i < archive_cards_len; i++) {
                    card = archive_cards.children[i];
                    card.classList.add('shiftCardRight90');
                }
            } else if (j == (archive_cards_len - 1)) {
                for (var i = 0; i < (archive_cards_len - 1); i++) {
                    card = archive_cards.children[i];
                    card.classList.add('shiftCardLeft90');
                }
            } else {
                for (var i = 0; i < j; i++) {
                    var card = archive_cards.children[i];
                    card.classList.add('shiftCardLeft50');
                }

                for (var i = (j + 1); i < archive_cards.childElementCount; i++) {
                    var card = archive_cards.children[i];
                    card.classList.add('shiftCardRight50');
                }
            }
        } else if (section_name == "archive_2018") {
            if (j == 0) {
                for (var i = 1; i < archive_cards_2018_len; i++) {
                    card = archive_cards_2018.children[i];
                    card.classList.add('shiftCardRight90');
                }
            } else if (j == (archive_cards_2018_len - 1)) {
                for (var i = 0; i < (archive_cards_2018_len - 1); i++) {
                    card = archive_cards_2018.children[i];
                    card.classList.add('shiftCardLeft90');
                }
            } else {
                for (var i = 0; i < j; i++) {
                    var card = archive_cards_2018.children[i];
                    card.classList.add('shiftCardLeft50');
                }

                for (var i = (j + 1); i < archive_cards_2018.childElementCount; i++) {
                    var card = archive_cards_2018.children[i];
                    card.classList.add('shiftCardRight50');
                }
            }
        }
    }

    function shiftScaleDown(j, section_name) {
        j = j - 1;

        if (section_name == "speakers") {
            console.log("Hello");
            // if (j == 0) {
            // 	for (var i = 1; i < speaker_cards_len; i++) {
            // 		card = speaker_cards.children[i];
            // 		card.classList.remove('shiftCardRight90');
            // 	}
            // } else if (j == (speaker_cards_len - 1)) {
            // 	for (var i = 0; i < (speaker_cards_len - 1); i++) {
            // 		card = speaker_cards.children[i];
            // 		card.classList.remove('shiftCardLeft90');
            // 	}
            // } else {
            // 	for (var i = 0; i < j; i++) {
            // 		var card = speaker_cards.children[i];
            // 		card.classList.remove('shiftCardLeft50');
            // 	}

            // 	for (var i = (j + 1); i < speaker_cards.childElementCount; i++) {
            // 		var card = speaker_cards.children[i];
            // 		card.classList.remove('shiftCardRight50');
            // 	}
            // }
        } else if (section_name == "executives") {
            console.log("Hello");
            // if (j == 0) {
            // 	for (var i = 1; i < exec_cards_len; i++) {
            // 		card = exec_cards.children[i];
            // 		card.classList.remove('shiftCardRight90');
            // 	}
            // } else if (j == (exec_cards_len - 1)) {
            // 	for (var i = 0; i < (exec_cards_len - 1); i++) {
            // 		card = exec_cards.children[i];
            // 		card.classList.remove('shiftCardLeft90');
            // 	}
            // } else {
            // 	for (var i = 0; i < j; i++) {
            // 		var card = exec_cards.children[i];
            // 		card.classList.remove('shiftCardLeft50');
            // 	}

            // 	for (var i = (j + 1); i < exec_cards.childElementCount; i++) {
            // 		var card = exec_cards.children[i];
            // 		card.classList.remove('shiftCardRight50');
            // 	}
            // }
        } else if (section_name == "sponsors") {
            // if (j == 0) {
            //     for (var i = 1; i < spons_cards_len; i++) {
            //         card = spons_cards.children[i];
            //         card.classList.remove('shiftCardRight90');
            //     }
            // } else if (j == (spons_cards_len - 1)) {
            //     for (var i = 0; i < (spons_cards_len - 1); i++) {
            //         card = spons_cards.children[i];
            //         card.classList.remove('shiftCardLeft90');
            //     }
            // } else {
            //     for (var i = 0; i < j; i++) {
            //         var card = spons_cards.children[i];
            //         card.classList.remove('shiftCardLeft50');
            //     }

            //     for (var i = (j + 1); i < spons_cards.childElementCount; i++) {
            //         var card = spons_cards.children[i];
            //         card.classList.remove('shiftCardRight50');
            //     }
            // }
        } else if (section_name == "archive") {
            if (j == 0) {
                for (var i = 1; i < archive_cards_len; i++) {
                    card = archive_cards.children[i];
                    card.classList.remove('shiftCardRight90');
                }
            } else if (j == (archive_cards_len - 1)) {
                for (var i = 0; i < (archive_cards_len - 1); i++) {
                    card = archive_cards.children[i];
                    card.classList.remove('shiftCardLeft90');
                }
            } else {
                for (var i = 0; i < j; i++) {
                    var card = archive_cards.children[i];
                    card.classList.remove('shiftCardLeft50');
                }

                for (var i = (j + 1); i < archive_cards.childElementCount; i++) {
                    var card = archive_cards.children[i];
                    card.classList.remove('shiftCardRight50');
                }
            }
        } else if (section_name == "archive_2018") {
            if (j == 0) {
                for (var i = 1; i < archive_cards_2018_len; i++) {
                    card = archive_cards_2018.children[i];
                    card.classList.remove('shiftCardRight90');
                }
            } else if (j == (archive_cards_2018_len - 1)) {
                for (var i = 0; i < (archive_cards_2018_len - 1); i++) {
                    card = archive_cards_2018.children[i];
                    card.classList.remove('shiftCardLeft90');
                }
            } else {
                for (var i = 0; i < j; i++) {
                    var card = archive_cards_2018.children[i];
                    card.classList.remove('shiftCardLeft50');
                }

                for (var i = (j + 1); i < archive_cards_2018.childElementCount; i++) {
                    var card = archive_cards_2018.children[i];
                    card.classList.remove('shiftCardRight50');
                }
            }
        }
    }


    // Write function to change values of speaker-info class div based on button click.
    function generate(j, type) {

        j = j - 1;

        if (type == "speakers") {
            var speaker = speakers_data[j];
            var text = speaker_info.children[0].children;
            var image = speaker_info.children[1].children;
            var social = speaker_info.children[0].children[4];

            text[0].innerHTML = speaker["name"];
            // console.log(speaker["name"]);
            text[1].innerHTML = speaker["occupation"];
            // console.log(speaker["occupation"]);
            text[2].innerText = speaker["talk"];
            // console.log(speaker["talk"]);
            text[3].innerText = speaker["write_up"];
            // console.log(speaker["write_up"]);

            social.children[0].children[0].href = speaker["lin"];
            if (speaker["lin"] == "#") {
                social.children[0].style.display = "none";
            }
            // console.log(executive["lin"]);
            social.children[1].children[0].href = speaker["insta"];
            if (speaker["insta"] == "#") {
                social.children[1].style.display = "none";
            }
            // console.log(executive["insta"]);
            social.children[2].children[0].href = speaker["fb"];
            if (speaker["fb"] == "#") {
                social.children[2].style.display = "none";
            }
            // console.log(executive["fb"]);

            image[0].srcset = speaker["picture"];

            // speaker_info.classList.remove('pull-animation');
            // speaker_info.classList.add('drop-animation');
            speaker_info.style.display = "flex";
        } else if (type == "executives") {
            var executive = executives_data[j];
            executive_info.children[0].children[0]
            var text = executive_info.children[0].children[0].children;
            var image = executive_info.children[1].children;
            var social = executive_info.children[0].children[0].children[3];

            text[0].innerHTML = executive["name"];
            console.log(executive["name"]);
            text[1].innerHTML = executive["post"];
            // console.log(executive["post"]);
            text[2].innerText = executive["write_up"];
            // console.log(executive["write_up"]);

            social.children[0].children[0].href = executive["lin"];
            // console.log(executive["lin"]);
            social.children[1].children[0].href = executive["insta"];
            // console.log(executive["insta"]);
            social.children[2].children[0].href = executive["fb"];
            // console.log(executive["fb"]);

            image[0].srcset = executive["picture"];
            // console.log(executive["picture"]);

            if (j == 9 || j == 10) {
                executive_info.children[1].children[1].style.background = "radial-gradient(circle at 55%, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 70%)";
            }

            // executive_info.classList.remove('pull-animation');
            // executive_info.classList.add('drop-animation');
            executive_info.style.display = "flex";
        } else if (type == "archives") {
            var archive = archives_data[j];
            var video = archive_info.children[0].children[0];

            // console.log(archive["link"]);
            window.open(archive["link"]);

            // archive_info.style.display = "block";
        } else if (type == "archives_2018") {
            var archive = archives_2018_data[j];
            var video = archive_info_2018.children[0].children[0];

            // console.log(archive["link"]);
            window.open(archive["link"]);

            // archive_info.style.display = "block";
        }
    }

    $("#close-btn-speakers").click(e => {
        var social = speaker_info.children[0].children[4];
        social.children[0].style.display = "block";
        social.children[1].style.display = "block";
        social.children[2].style.display = "block";
        // speaker_info.classList.add('pull-animation');
        // speaker_info.classList.remove('drop-animation');
        speaker_info.style.display = "none";
    });
    $("#close-btn-executives").click(e => {
        // if(j == 9 || j == 10){
        //     executive_info.children[1].children[1].style.background = "none";
        // }
        // executive_info.classList.add('pull-animation');
        // executive_info.classList.remove('drop-animation');
        executive_info.style.display = "none";
    });
    $("#archives-info").click(e => {
        archive_info.children[0].children[0].src = "";
        archive_info.style.display = "none";
    });
    $("#archives-info-2018").click(e => {
        archive_info_2018.children[0].children[0].src = "";
        archive_info_2018.style.display = "none";
    });
}
// Mobile View
else if (screen.width < 768) {

    function shiftScaleUp(j, section_name) {
        j = j - 1;

        if (section_name == "speakers") {
            console.log("Hello");
            // generate(j, section_name);
            // if (j == 0) {
            // 	for (var i = 1; i < speaker_cards_len; i++) {
            // 		card = speaker_cards.children[i];
            // 		card.classList.add('shiftCardRight90');
            // 	}
            // } else if (j == (speaker_cards_len - 1)) {
            // 	for (var i = 0; i < (speaker_cards_len - 1); i++) {
            // 		card = speaker_cards.children[i];
            // 		card.classList.add('shiftCardLeft90');
            // 	}
            // } else {
            // 	for (var i = 0; i < j; i++) {
            // 		var card = speaker_cards.children[i];
            // 		card.classList.add('shiftCardLeft50');
            // 	}

            // 	for (var i = (j + 1); i < speaker_cards.childElementCount; i++) {
            // 		var card = speaker_cards.children[i];
            // 		card.classList.add('shiftCardRight50');
            // 	}
            // }
        } else if (section_name == "executives") {
            console.log("Hello");
            // generate(j, section_name);
            // if (j == 0) {
            // 	for (var i = 1; i < exec_cards_len; i++) {
            // 		card = exec_cards.children[i];
            // 		card.classList.add('shiftCardRight90');
            // 	}
            // } else if (j == (exec_cards_len - 1)) {
            // 	for (var i = 0; i < (exec_cards_len - 1); i++) {
            // 		card = exec_cards.children[i];
            // 		card.classList.add('shiftCardLeft90');
            // 	}
            // } else {
            // 	for (var i = 0; i < j; i++) {
            // 		var card = exec_cards.children[i];
            // 		card.classList.add('shiftCardLeft50');
            // 	}

            // 	for (var i = (j + 1); i < exec_cards.childElementCount; i++) {
            // 		var card = exec_cards.children[i];
            // 		card.classList.add('shiftCardRight50');
            // 	}
            // }
        } else if (section_name == "sponsors") {
            // if (j == 0) {
            //     for (var i = 1; i < spons_cards_len; i++) {
            //         card = spons_cards.children[i];
            //         card.classList.add('shiftCardRight90');
            //     }
            // } else if (j == (spons_cards_len - 1)) {
            //     for (var i = 0; i < (spons_cards_len - 1); i++) {
            //         card = spons_cards.children[i];
            //         card.classList.add('shiftCardLeft90');
            //     }
            // } else {
            //     for (var i = 0; i < j; i++) {
            //         var card = spons_cards.children[i];
            //         card.classList.add('shiftCardLeft50');
            //     }

            //     for (var i = (j + 1); i < spons_cards.childElementCount; i++) {
            //         var card = spons_cards.children[i];
            //         card.classList.add('shiftCardRight50');
            //     }
            // }
        } else if (section_name == "archive") {
            if (j == 0) {
                for (var i = 1; i < archive_cards_len; i++) {
                    card = archive_cards.children[i];
                    card.classList.add('shiftCardRight90');
                }
            } else if (j == (archive_cards_len - 1)) {
                for (var i = 0; i < (archive_cards_len - 1); i++) {
                    card = archive_cards.children[i];
                    card.classList.add('shiftCardLeft90');
                }
            } else {
                for (var i = 0; i < j; i++) {
                    var card = archive_cards.children[i];
                    card.classList.add('shiftCardLeft50');
                }

                for (var i = (j + 1); i < archive_cards.childElementCount; i++) {
                    var card = archive_cards.children[i];
                    card.classList.add('shiftCardRight50');
                }
            }
        } else if (section_name == "archive_2018") {
            if (j == 0) {
                for (var i = 1; i < archive_cards_2018_len; i++) {
                    card = archive_cards_2018.children[i];
                    card.classList.add('shiftCardRight90');
                }
            } else if (j == (archive_cards_2018_len - 1)) {
                for (var i = 0; i < (archive_cards_2018_len - 1); i++) {
                    card = archive_cards_2018.children[i];
                    card.classList.add('shiftCardLeft90');
                }
            } else {
                for (var i = 0; i < j; i++) {
                    var card = archive_cards_2018.children[i];
                    card.classList.add('shiftCardLeft50');
                }

                for (var i = (j + 1); i < archive_cards_2018.childElementCount; i++) {
                    var card = archive_cards_2018.children[i];
                    card.classList.add('shiftCardRight50');
                }
            }
        }
    }

    function shiftScaleDown(j, section_name) {
        j = j - 1;

        if (section_name == "speakers") {
            console.log("Hello");
            // if (j == 0) {
            // 	for (var i = 1; i < speaker_cards_len; i++) {
            // 		card = speaker_cards.children[i];
            // 		card.classList.remove('shiftCardRight90');
            // 	}
            // } else if (j == (speaker_cards_len - 1)) {
            // 	for (var i = 0; i < (speaker_cards_len - 1); i++) {
            // 		card = speaker_cards.children[i];
            // 		card.classList.remove('shiftCardLeft90');
            // 	}
            // } else {
            // 	for (var i = 0; i < j; i++) {
            // 		var card = speaker_cards.children[i];
            // 		card.classList.remove('shiftCardLeft50');
            // 	}

            // 	for (var i = (j + 1); i < speaker_cards.childElementCount; i++) {
            // 		var card = speaker_cards.children[i];
            // 		card.classList.remove('shiftCardRight50');
            // 	}
            // }
        } else if (section_name == "executives") {
            console.log("Hello");
            // if (j == 0) {
            // 	for (var i = 1; i < exec_cards_len; i++) {
            // 		card = exec_cards.children[i];
            // 		card.classList.remove('shiftCardRight90');
            // 	}
            // } else if (j == (exec_cards_len - 1)) {
            // 	for (var i = 0; i < (exec_cards_len - 1); i++) {
            // 		card = exec_cards.children[i];
            // 		card.classList.remove('shiftCardLeft90');
            // 	}
            // } else {
            // 	for (var i = 0; i < j; i++) {
            // 		var card = exec_cards.children[i];
            // 		card.classList.remove('shiftCardLeft50');
            // 	}

            // 	for (var i = (j + 1); i < exec_cards.childElementCount; i++) {
            // 		var card = exec_cards.children[i];
            // 		card.classList.remove('shiftCardRight50');
            // 	}
            // }
        } else if (section_name == "sponsors") {
            // if (j == 0) {
            //     for (var i = 1; i < spons_cards_len; i++) {
            //         card = spons_cards.children[i];
            //         card.classList.remove('shiftCardRight90');
            //     }
            // } else if (j == (spons_cards_len - 1)) {
            //     for (var i = 0; i < (spons_cards_len - 1); i++) {
            //         card = spons_cards.children[i];
            //         card.classList.remove('shiftCardLeft90');
            //     }
            // } else {
            //     for (var i = 0; i < j; i++) {
            //         var card = spons_cards.children[i];
            //         card.classList.remove('shiftCardLeft50');
            //     }

            //     for (var i = (j + 1); i < spons_cards.childElementCount; i++) {
            //         var card = spons_cards.children[i];
            //         card.classList.remove('shiftCardRight50');
            //     }
            // }
        } else if (section_name == "archive") {
            if (j == 0) {
                for (var i = 1; i < archive_cards_len; i++) {
                    card = archive_cards.children[i];
                    card.classList.remove('shiftCardRight90');
                }
            } else if (j == (archive_cards_len - 1)) {
                for (var i = 0; i < (archive_cards_len - 1); i++) {
                    card = archive_cards.children[i];
                    card.classList.remove('shiftCardLeft90');
                }
            } else {
                for (var i = 0; i < j; i++) {
                    var card = archive_cards.children[i];
                    card.classList.remove('shiftCardLeft50');
                }

                for (var i = (j + 1); i < archive_cards.childElementCount; i++) {
                    var card = archive_cards.children[i];
                    card.classList.remove('shiftCardRight50');
                }
            }
        } else if (section_name == "archive_2018") {
            if (j == 0) {
                for (var i = 1; i < archive_cards_2018_len; i++) {
                    card = archive_cards_2018.children[i];
                    card.classList.remove('shiftCardRight90');
                }
            } else if (j == (archive_cards_2018_len - 1)) {
                for (var i = 0; i < (archive_cards_2018_len - 1); i++) {
                    card = archive_cards_2018.children[i];
                    card.classList.remove('shiftCardLeft90');
                }
            } else {
                for (var i = 0; i < j; i++) {
                    var card = archive_cards_2018.children[i];
                    card.classList.remove('shiftCardLeft50');
                }

                for (var i = (j + 1); i < archive_cards_2018.childElementCount; i++) {
                    var card = archive_cards_2018.children[i];
                    card.classList.remove('shiftCardRight50');
                }
            }
        }
    }


    // Write function to change values of speaker-info class div based on button click.
    function generate(j, type) {

        j = j - 1;

        if (type == "speakers") {
            var speaker = speakers_data[j];
            var text = speaker_info.children[0].children;
            var image = speaker_info.children[1].children;
            var social = speaker_info.children[0].children[4];

            text[0].innerHTML = speaker["name"];
            // console.log(speaker["name"]);
            text[1].innerHTML = speaker["occupation"];
            // console.log(speaker["occupation"]);
            text[2].innerText = speaker["talk"];
            // console.log(speaker["talk"]);
            text[3].innerText = speaker["write_up"];
            // console.log(speaker["write_up"]);

            social.children[0].children[0].href = speaker["lin"];
            if (speaker["lin"] == "#") {
                social.children[0].style.display = "none";
            }
            // console.log(executive["lin"]);
            social.children[1].children[0].href = speaker["insta"];
            if (speaker["insta"] == "#") {
                social.children[1].style.display = "none";
            }
            // console.log(executive["insta"]);
            social.children[2].children[0].href = speaker["fb"];
            if (speaker["fb"] == "#") {
                social.children[2].style.display = "none";
            }
            // console.log(executive["fb"]);

            image[0].srcset = speaker["picture"];

            // speaker_info.classList.remove('pull-animation');
            // speaker_info.classList.add('drop-animation');
            speaker_info.style.display = "flex";
        } else if (type == "executives") {
            var executive = executives_data[j];
            executive_info.children[0].children[0]
            var text = executive_info.children[0].children[0].children;
            var image = executive_info.children[1].children;
            var social = executive_info.children[0].children[0].children[3];

            text[0].innerHTML = executive["name"];
            console.log(executive["name"]);
            text[1].innerHTML = executive["post"];
            // console.log(executive["post"]);
            text[2].innerText = executive["write_up"];
            // console.log(executive["write_up"]);

            social.children[0].children[0].href = executive["lin"];
            // console.log(executive["lin"]);
            social.children[1].children[0].href = executive["insta"];
            // console.log(executive["insta"]);
            social.children[2].children[0].href = executive["fb"];
            // console.log(executive["fb"]);

            image[0].srcset = executive["picture"];
            // console.log(executive["picture"]);

            if (j == 9 || j == 10) {
                executive_info.children[1].children[1].style.background = "radial-gradient(circle at 55%, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 70%)";
            }

            // executive_info.classList.remove('pull-animation');
            // executive_info.classList.add('drop-animation');
            executive_info.style.display = "flex";
        } else if (type == "archives") {
            var archive = archives_data[j];
            var video = archive_info.children[0].children[0];

            // console.log(archive["link"]);
            window.open(archive["link"]);

            // archive_info.style.display = "block";
        } else if (type == "archives_2018") {
            var archive = archives_2018_data[j];
            var video = archive_info_2018.children[0].children[0];

            // console.log(archive["link"]);
            window.open(archive["link"]);

            // archive_info.style.display = "block";
        }
    }

    $("#close-btn-speakers").click(e => {
        var social = speaker_info.children[0].children[4];
        social.children[0].style.display = "block";
        social.children[1].style.display = "block";
        social.children[2].style.display = "block";
        // speaker_info.classList.add('pull-animation');
        // speaker_info.classList.remove('drop-animation');
        speaker_info.style.display = "none";
    });
    $("#close-btn-executives").click(e => {
        // if(j == 9 || j == 10){
        //     executive_info.children[1].children[1].style.background = "none";
        // }
        // executive_info.classList.add('pull-animation');
        // executive_info.classList.remove('drop-animation');
        executive_info.style.display = "none";
    });
    $("#archives-info").click(e => {
        archive_info.children[0].children[0].src = "";
        archive_info.style.display = "none";
    });
    $("#archives-info-2018").click(e => {
        archive_info_2018.children[0].children[0].src = "";
        archive_info_2018.style.display = "none";
    });
}