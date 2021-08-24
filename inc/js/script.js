// Fetching json files
const pro_web_json = 'inc/json/projects_webs.json'
const projectWebsitesJson = fetch(pro_web_json)

const pro_ill_json = 'inc/json/projects_illu.json'
const projectIllustrationsJson = fetch(pro_ill_json)

const pro_fil_json = 'inc/json/projects_film.json'
const projectFilmJson = fetch(pro_fil_json)

const arc_web_json = 'inc/json/archives_webs.json'
const archivesWebsitesJson = fetch(arc_web_json)

const arc_ill_json = 'inc/json/archives_illu.json'
const archivesIllustrationsJson = fetch(arc_ill_json)

const footerJson = 'inc/json/footer.json'
const footerJsonFetch = fetch(footerJson)

// Lightbox
// Creating the lightbox element
var lbWrapperPro = document.createElement('div')
lbWrapperPro.className = 'lb-container'
lbWrapperPro.id = 'lb-container'
var lbImgWrapperPro = document.createElement('div')
lbImgWrapperPro.className = 'lb-image'
var lbButtonClosePro = document.createElement('button')
lbButtonClosePro.className = 'lb-close'
lbButtonClosePro.innerHTML = 'X'
lbImgWrapperPro.appendChild(lbButtonClosePro)
lbWrapperPro.appendChild(lbImgWrapperPro)

var lbWrapperArc = document.createElement('div')
lbWrapperArc.className = 'lb-container'
lbWrapperArc.id = 'lb-container'
var lbImgWrapperArc = document.createElement('div')
lbImgWrapperArc.className = 'lb-image'
var lbButtonCloseArc = document.createElement('button')
lbButtonCloseArc.className = 'lb-close'
lbButtonCloseArc.innerHTML = 'X'
lbImgWrapperArc.appendChild(lbButtonCloseArc)
lbWrapperArc.appendChild(lbImgWrapperArc)
// ////////////////////////////////////////////////////////////////
// //////////////////////////////// Creating the header
// ////////////////////////////////////////////////////////////////
var headerWrapper = document.getElementById('header-wrapper');
var headerContainer = document.createElement('div');
headerContainer.id = 'headerContainer';
headerContainer.className = 'headerContainer';

var logoWrapper = document.createElement('div');
logoWrapper.className = 'logoWrapper'
var logoLink = document.createElement('a');
logoLink.addEventListener('click', () => {
    if (document.getElementById('site').classList.contains('index')) {
        logoLink.href = '#0'
    } else {
        // Preparing the site
        logoLink.href = '#0'
        setTimeout(function () {
            logoLink.href = '#0'
        }, 10)
        setTimeout(function () {
            document.getElementById('site').className = 'index'
        }, 10)
        if (document.getElementById('site').classList.contains('about')) {
            document.getElementById('about__wrapper').remove()
        }
        if (document.getElementById('site').classList.contains('project')) {
            document.getElementById('project__wrapper').remove()
        }
        if (document.getElementById('site').classList.contains('archive')) {
            document.getElementById('archive__wrapper').remove()
        }
        document.getElementById('main__wrapper').remove()
        // Swapping "current"
        document.getElementById('frontLink').classList.add('current')
        document.getElementById('aboutLink').classList.remove('current')
        document.getElementById('projectLink').classList.remove('current')
        document.getElementById('archiveLink').classList.remove('current')
        // Getting the language
        if (document.getElementById('language').classList.contains('danish')) {
            document.getElementById('main').className = 'index__main index__da'
        } else {
            document.getElementById('main').className = 'index__main index__eng'
        }
    }
})
var logoImg = document.createElement('img');
logoImg.className = 'logo';
logoImg.src = 'assets/logo.png';
logoImg.alt = 'logo';

logoLink.appendChild(logoImg);
logoWrapper.appendChild(logoLink);

var linkWrapper = document.createElement('div')
linkWrapper.id = 'link';
linkWrapper.className = 'linkWrapper';
// Front Link
var frontLink = document.createElement('a');
frontLink.className = 'menu current';
frontLink.id = 'frontLink';
frontLink.addEventListener('click', () => {
    if (document.getElementById('site').classList.contains('index')) {
        frontLink.href = '#0'
    } else {
        // Preparing the site
        frontLink.href = '#0'
        setTimeout(function () {
            frontLink.href = '#0'
        }, 10)
        setTimeout(function () {
            document.getElementById('site').className = 'index'
        }, 10)
        if (document.getElementById('site').classList.contains('about')) {
            document.getElementById('about__wrapper').remove()
        }
        if (document.getElementById('site').classList.contains('project')) {
            document.getElementById('project__wrapper').remove()
        }
        if (document.getElementById('site').classList.contains('archive')) {
            document.getElementById('archive__wrapper').remove()
        }
        document.getElementById('main__wrapper').remove()
        // Swapping "current"
        document.getElementById('frontLink').classList.add('current')
        document.getElementById('aboutLink').classList.remove('current')
        document.getElementById('projectLink').classList.remove('current')
        document.getElementById('archiveLink').classList.remove('current')
        // Getting the language
        if (document.getElementById('language').classList.contains('danish')) {
            document.getElementById('main').className = 'index__main index__da'
        } else {
            document.getElementById('main').className = 'index__main index__eng'
        }
    }
})
frontLink.innerHTML = 'Forside';
// About Link
var aboutLink = document.createElement('a');
aboutLink.className = 'menu';
aboutLink.id = 'aboutLink';
aboutLink.addEventListener('click', () => {
    if (document.getElementById('site').classList.contains('about')) {
        aboutLink.href = '#0'
    } else {
        // Preparing the site
        aboutLink.href = '#0'
        setTimeout(function () {
            aboutLink.href = '#0'
        }, 10)
        if (document.getElementById('site').classList.contains('project')) {
            document.getElementById('project__wrapper').remove()
        }
        if (document.getElementById('site').classList.contains('archive')) {
            document.getElementById('archive__wrapper').remove()
        }
        document.getElementById('site').className = 'about'
        document.getElementById('main').className = ''
        // Swapping "current"
        document.getElementById('frontLink').classList.remove('current')
        document.getElementById('aboutLink').classList.add('current')
        document.getElementById('projectLink').classList.remove('current')
        document.getElementById('archiveLink').classList.remove('current')
        // Creating the about site
        setTimeout(function () {
            mainWrapper.appendChild(aboutWrapper)
            document.getElementById('main').appendChild(mainWrapper)
            // Using the right language
            if (document.getElementById('language').classList.contains('danish')) {
                p_1_about.innerHTML = 'Jeg hedder Jacob Hedengran Erholt, jeg er 19 år og bor i Frederikssund.'
                p_2_about.innerHTML = 'For tiden går jeg i skolepraktik, som Digital Media elev. <br> Jeg har arbejdet med HTML, CSS, JS og PHP. Jeg har også kendskab til Illustrator, Photoshop, Wix og Wordpress, og Office pakken.'
                p_3_about.innerHTML = 'I min fritid tilbringer jeg mange timer foran computeren, hvor jeg laver kreative sager, såsom hjemmesider og projekter i forskellige spil. Jeg spiller computerspil, da jeg godt kan lide følelsen af virkelig at skulle kæmpe for noget, eller bygge noget op, den tilfredsstillelse er fantastisk. < br > '
                p_4_about.innerHTML = 'Jeg kan godt lide at lave hjemmesider, da jeg elsker at man kan se det endelige resultat (som altid kan forbedres!), hvor det virker og andre kan benytte sig af det. Jeg synes det er virkelig fedt, hvordan man kan lege med de forskellige egenskaber i html, css og javascript, så man kan få sin hjemmeside til at have alle mulige funktioner. <br><br> Jeg finder det interessant, hvordan man selv kan se fra start til slut, hvordan hjemmesiden bliver bedre og mere funktionelt, samt pænere sat op.'
                p_5_about.innerHTML = '<h2>Uddannelse</h2> ∎ 2021 - Hovedeforløb 1 på RTS i Digital Media <br><br> ∎ 2020 - Praktik hos Layback <br><br> ∎ 2020 - Grundforløb 2 på RTS i Digital Media <br><br> ∎ 2019 - Grundforløb 1 på RTS i Digital Design <br><br> ∎ 2019 - 10. klasses afgangseksamen <br><br> ∎ 2018 - 9. klasses afgangseksamen'
            } else {
                p_1_about.innerHTML = 'My Containera Hedengran Erholt, I am 19 years old and is living in Frederikssund, Denmark.'
                p_2_about.innerHTML = 'Currently i am in school practice, as a Digital Media student. <br> I have worked with HTML, CSS, JS and PHP. I also know a bit about Illustrator, Photoshop, Wix, Wordpress and the Office pack.'
                p_3_about.innerHTML = 'In my spare time I spend many hours in front of my computer, where I make creative projects, such as websites or illustrations. I like to play computer games, since I like the feeling of really having to fight for something or build something cool up, the satisfaction is amazing.'
                p_4_about.innerHTML = 'I like to create website, as I love that you can see the final result (whioch always can be improved!), which is working, and others can see and interact with it. I think it is amazing how you are able to "play" with the different features in HTML, CSS and javascript, so you can get your website to have all possible functions <br><br> I find it interessting, how you can see the website from start to finish, getting better, more functional, as well as nicer set up.'
                p_5_about.innerHTML = '<h2>Education</h2> ∎ 2021 - Main course 1 at RTS as Digital Meida <br><br> ∎ 2020 - Practice at Layback <br><br> ∎ 2020 - Basic course 2 at RTS as Digital Media <br><br> ∎ 2019 - Basic course 1 at RTS as Digital Design <br><br> ∎ 2019 - 10th grade leaving examination <br><br> ∎ 2018 - 9th grade leaving examination'
            }
        }, 11)
    }
})
aboutLink.innerHTML = 'Om mig';
// Project Link
var projectLink = document.createElement('a');
projectLink.className = 'menu';
projectLink.id = 'projectLink';
projectLink.addEventListener('click', () => {
    if (document.getElementById('site').classList.contains('project')) {
        projectLink.href = '#0'
    } else {
        projectLink.href = '#0'
        setTimeout(function () {
            projectLink.href = '#0'
        }, 10)
        // Preparing the site
        if (document.getElementById('site').classList.contains('about')) {
            document.getElementById('about__wrapper').remove()
        }
        if (document.getElementById('site').classList.contains('archive')) {
            document.getElementById('archive__wrapper').remove()
        }
        document.getElementById('site').className = 'project'
        document.getElementById('main').className = ''
        // Swapping "current"
        document.getElementById('frontLink').classList.remove('current')
        document.getElementById('aboutLink').classList.remove('current')
        document.getElementById('projectLink').classList.add('current')
        document.getElementById('archiveLink').classList.remove('current')
        // Creating the project site
        setTimeout(function () {
            mainWrapper.appendChild(projectWrapper)
            document.getElementById('main').appendChild(mainWrapper)
            // Using the right language
            if (document.getElementById('language').classList.contains('danish')) {
                // Danish
                let danish_ = document.getElementsByClassName('danish-')
                let english_ = document.getElementsByClassName('english-')

                projectIntroH2.innerHTML = 'Hjemmesider'
                projectIntroP.innerHTML = 'Her er nogle forskellige hjemmesider jeg har lavet, med HTML, JS og CSS <br><br>(Nyeste først)'
                projectItem_1.innerHTML = 'Hjemmesider'
                projectItem_2.innerHTML = 'Illustrationer'
                projectItem_3.innerHTML = 'Videoer'

                for (let i = 0; i < danish_.length; i++) {
                    danish_[i].classList.remove('hidden')
                }
                for (let i = 0; i < english_.length; i++) {
                    english_[i].classList.add('hidden')
                }
            } else {
                // English
                let danish_ = document.getElementsByClassName('danish-')
                let english_ = document.getElementsByClassName('english-')

                projectIntroH2.innerHTML = 'Websites'
                projectIntroP.innerHTML = 'Here are some website i have created, using HTML, CSS and JS <br><br>(Newest first)'
                projectItem_1.innerHTML = 'Websites'
                projectItem_2.innerHTML = 'Illustrations'
                projectItem_3.innerHTML = 'Videos'

                for (let i = 0; i < danish_.length; i++) {
                    danish_[i].classList.add('hidden')
                }
                for (let i = 0; i < english_.length; i++) {
                    english_[i].classList.remove('hidden')
                }
            }
            if (document.getElementById('lbProject').classList.contains('notActive')) {
                setTimeout(function () {
                    var galleryElements = document.querySelectorAll("#lightbox-items img");
                    var lb = document.querySelector(".lb-container");
                    var lbImg = document.querySelector(".lb-image");
                    var lbClose = document.querySelector(".lb-close");
                    var tempImg = document.createElement('img');

                    galleryElements.forEach(function (el) {
                        el.addEventListener("click", function () {
                            var src = el.getAttribute("src");
                            tempImg.setAttribute('src', src);
                            lbImg.appendChild(tempImg);
                            lb.classList.add("lb-container-active");
                        });
                    });
                    lbClose.addEventListener("click", function () {
                        lbImg.removeChild(tempImg);
                        lb.classList.remove("lb-container-active");
                    })
                    document.getElementById('lbProject').classList.remove('notActive')
                    document.getElementById('lbProject').classList.add('active')
                }, 11)
                projectWrapper.appendChild(lbWrapperPro)
            }
        }, 11)
    }
})
projectLink.innerHTML = 'Projekter';
// Archive Link
var archiveLink = document.createElement('a');
archiveLink.className = 'menu';
archiveLink.id = 'archiveLink';
archiveLink.addEventListener('click', () => {
    if (document.getElementById('site').classList.contains('archive')) {
        archiveLink.href = '#0'
    } else {
        archiveLink.href = '#0'
        setTimeout(function () {
            archiveLink.href = '#0'
        }, 10)
        // Preparing the site
        if (document.getElementById('site').classList.contains('about')) {
            document.getElementById('about__wrapper').remove()
        }
        if (document.getElementById('site').classList.contains('project')) {
            document.getElementById('project__wrapper').remove()
        }
        document.getElementById('site').className = 'archive'
        document.getElementById('main').className = ''
        // Swapping "current"
        document.getElementById('frontLink').classList.remove('current')
        document.getElementById('aboutLink').classList.remove('current')
        document.getElementById('projectLink').classList.remove('current')
        document.getElementById('archiveLink').classList.add('current')
        // Creating the archive site
        setTimeout(function () {
            mainWrapper.appendChild(archiveWrapper)
            document.getElementById('main').appendChild(mainWrapper)
            // Using the right language
            if (document.getElementById('language').classList.contains('danish')) {
                // Danish
                let danish_ = document.getElementsByClassName('danish-')
                let english_ = document.getElementsByClassName('english-')
                archiveTitle_1.innerHTML = 'Hjemmesider'
                archiveText_1.innerHTML = 'Her er nogle forskellige hjemmesider jeg har lavet, med HTML, JS og CSS <br><br>(Nyeste først)'
                archiveItem_1.innerHTML = 'Hjemmesider'
                archiveItem_2.innerHTML = 'Illustrationer'
                archiveTitle_2.innerHTML = 'Illustrationer'
                archiveText_2.innerHTML = 'Her er nogle forskellige projekter jeg har lavet, i min fritid.'
                // Translate the page
                for (let i = 0; i < danish_.length; i++) {
                    danish_[i].classList.remove('hidden')
                }
                for (let i = 0; i < english_.length; i++) {
                    english_[i].classList.add('hidden')
                }
            } else {
                // English
                let danish_ = document.getElementsByClassName('danish-')
                let english_ = document.getElementsByClassName('english-')
                archiveTitle_1.innerHTML = 'Websites'
                archiveText_1.innerHTML = 'Here are some website i have created, using HTML, CSS and JS <br><br>(Newest first)'
                archiveItem_1.innerHTML = 'Websites'
                archiveItem_2.innerHTML = 'Illustrations'
                archiveTitle_2.innerHTML = 'Illustrations'
                archiveText_2.innerHTML = 'Here are some different projects I have created.'
                // Translate the page
                for (let i = 0; i < danish_.length; i++) {
                    danish_[i].classList.add('hidden')
                }
                for (let i = 0; i < english_.length; i++) {
                    english_[i].classList.remove('hidden')
                }
            }
            if (document.getElementById('lbArchive').classList.contains('notActive')) {
                setTimeout(function () {
                    var galleryElements = document.querySelectorAll("#lightbox-items img");
                    var lb = document.querySelector(".lb-container");
                    var lbImg = document.querySelector(".lb-image");
                    var lbClose = document.querySelector(".lb-close");
                    var tempImg = document.createElement('img');

                    galleryElements.forEach(function (el) {
                        el.addEventListener("click", function () {
                            var src = el.getAttribute("src");
                            //lbImg.style.backgroundImage = "url("+src+")";
                            tempImg.setAttribute('src', src);
                            lbImg.appendChild(tempImg);
                            lb.classList.add("lb-container-active");
                        });
                    });
                    lbClose.addEventListener("click", function () {
                        //lbImg.style.backgroundImage = "";
                        lbImg.removeChild(tempImg);
                        lb.classList.remove("lb-container-active");
                    })
                    document.getElementById('lbArchive').classList.remove('notActive')
                    document.getElementById('lbArchive').classList.add('active')
                }, 11)
                archiveWrapper.appendChild(lbWrapperArc)
            }
        }, 11)
    }
})
archiveLink.innerHTML = 'Arkiv';
var contactLink = document.createElement('a');
contactLink.className = 'menu';
contactLink.id = 'contactLink';
contactLink.href = '#1';
contactLink.innerHTML = 'Kontakt';
// Translate
var translateWrapper = document.createElement('div');
translateWrapper.className = 'translateWrapper';

var translateContainer = document.createElement('div');
translateContainer.className = 'translateContainer';
translateContainer.id = 'translateContainer';
translateContainer.addEventListener('click', () => {
    document.getElementById('translateDropdownContainer').classList.toggle('translateDropdownContainerActive')
})

var translateBtn = document.createElement('div')
translateBtn.className = 'translateBtn'

var translateImg = document.createElement('img')
translateImg.src = 'assets/index/langWhite.png'
translateImg.className = 'translateImg'

var translateText = document.createElement('a')
translateText.innerHTML = 'Dansk'
translateText.className = 'translateText'

var translateDropdownContainer = document.createElement('div')
translateDropdownContainer.className = 'translateDropdownContainer'
translateDropdownContainer.id = 'translateDropdownContainer'

var translateDropdownText = document.createElement('a')
translateDropdownText.innerHTML = 'English'

translateDropdownContainer.appendChild(translateDropdownText)

translateBtn.appendChild(translateImg)
translateBtn.appendChild(translateText)
translateContainer.appendChild(translateBtn)
translateContainer.appendChild(translateDropdownContainer)
translateWrapper.appendChild(translateContainer)
// Translate Danish
translateDropdownContainer.addEventListener('click', () => {
    if (document.getElementById('language').classList.contains('english')) {
        setTimeout(function () {
            console.log('translate button danish');
            document.getElementById('language').className = 'danish';

            // Checking if its index
            if (document.getElementById('site').classList.contains('index')) {
                console.log('INDEX')
                // Swapping background image
                document.getElementById('main').className = ('index__main index__da');
            } else {
                console.log('NOT INDEX')
            }
            // Checking if its about
            if (document.getElementById('site').classList.contains('about')) {
                console.log('ABOUT')
                // Translateing the page
                p_1_about.innerHTML = 'Jeg hedder Jacob Hedengran Erholt, jeg er 19 år og bor i Frederikssund.'
                p_2_about.innerHTML = 'For tiden går jeg i skolepraktik, som Digital Media elev. <br> Jeg har arbejdet med HTML, CSS, JS og PHP. Jeg har også kendskab til Illustrator, Photoshop, Wix og Wordpress, og Office pakken.'
                p_3_about.innerHTML = 'I min fritid tilbringer jeg mange timer foran computeren, hvor jeg laver kreative sager, såsom hjemmesider og projekter i forskellige spil. Jeg spiller computerspil, da jeg godt kan lide følelsen af virkelig at skulle kæmpe for noget, eller bygge noget op, den tilfredsstillelse er fantastisk. < br > '
                p_4_about.innerHTML = 'Jeg kan godt lide at lave hjemmesider, da jeg elsker at man kan se det endelige resultat (som altid kan forbedres!), hvor det virker og andre kan benytte sig af det. Jeg synes det er virkelig fedt, hvordan man kan lege med de forskellige egenskaber i html, css og javascript, så man kan få sin hjemmeside til at have alle mulige funktioner. <br><br> Jeg finder det interessant, hvordan man selv kan se fra start til slut, hvordan hjemmesiden bliver bedre og mere funktionelt, samt pænere sat op.'
                p_5_about.innerHTML = '<h2>Uddannelse</h2> ∎ 2021 - Hovedeforløb 1 på RTS i Digital Media <br><br> ∎ 2020 - Praktik hos Layback <br><br>∎ 2020 - Grundforløb 2 på RTS i Digital Media <br><br>∎ 2019 - Grundforløb 1 på RTS i Digital Design <br><br>∎ 2019 - 10. klasses afgangseksamen <br><br>∎ 2018 - 9. klasses afgangseksamen'
            } else {
                console.log('NOT ABOUT')
            }
            // Checking if its project
            if (document.getElementById('site').classList.contains('project')) {
                console.log('PROJECT')
                // Translating the page
                projectIntroH2.innerHTML = 'Hjemmesider'
                projectIntroP.innerHTML = 'Her er nogle forskellige hjemmesider jeg har lavet, med HTML, JS og CSS <br><br>(Nyeste først)'
                projectItem_1.innerHTML = 'Hjemmesider'
                projectItem_2.innerHTML = 'Illustrationer'
                projectItem_3.innerHTML = 'Videoer'
                projectIllustrationsH2.innerHTML = 'Illustrationer'
                projectIllustrationsP.innerHTML = 'Her er nogle forskellige projekter jeg har lavet, med Blender, Maya og Illustrator.'
                projectFilmH2.innerHTML = 'Film og animationer'
                projectFilmP.innerHTML = 'Her er nogle forskellige projekter jeg har lavet'
            } else {
                console.log('NOT PROJECT')
            }
            // Checking if its archive
            if (document.getElementById('site').classList.contains('archive')) {
                archiveTitle_1.innerHTML = 'Hjemmesider'
                archiveText_1.innerHTML = 'Her er nogle forskellige hjemmesider jeg har lavet, med HTML, JS og CSS <br><br>(Nyeste først)'
                archiveItem_1.innerHTML = 'Hjemmesider'
                archiveItem_2.innerHTML = 'Illustrationer'
                archiveTitle_2.innerHTML = 'Illustrationer'
                archiveText_2.innerHTML = 'Her er nogle forskellige projekter jeg har lavet, i min fritid.'
            }
            // Translating universal stuff
            let danish_ = document.getElementsByClassName('danish-')
            let english_ = document.getElementsByClassName('english-')

            frontLink.innerHTML = 'Forside';
            aboutLink.innerHTML = 'Om mig';
            projectLink.innerHTML = 'Projekter';
            archiveLink.innerHTML = 'Arkiv';
            contactLink.innerHTML = 'Kontakt';

            footerTitle_h1.innerHTML = 'Kontakt';

            for (let i = 0; i < danish_.length; i++) {
                danish_[i].classList.remove('hidden')
            }
            for (let i = 0; i < english_.length; i++) {
                english_[i].classList.add('hidden')
            }

        }, 10)
        translateText.innerHTML = 'Dansk'
        translateDropdownText.innerHTML = 'English'
    } else {
        setTimeout(function () {
            console.log('translate button english');
            document.getElementById('language').className = 'english';

            // Checking if its index
            if (document.getElementById('site').classList.contains('index')) {
                console.log('INDEX')
                // Translateing the page
                // Swapping background image
                document.getElementById('main').className = 'index__main index__eng';
            } else {
                console.log('NOT INDEX')
            }
            // Checking if its about
            if (document.getElementById('site').classList.contains('about')) {
                console.log('ABOUT')
                // Translateing the page
                p_1_about.innerHTML = 'My name is Jacob Hedengran Erholt, I am 19 years old and is living in Frederikssund, Denmark.'
                p_2_about.innerHTML = 'Currently i am in school practice, as a Digital Media student. <br> I have worked with HTML, CSS, JS and PHP. I also know a bit about Illustrator, Photoshop, Wix, Wordpress and the Office pack.'
                p_3_about.innerHTML = 'In my spare time I spend many hours in front of my computer, where I make creative projects, such as websites or illustrations. I like to play computer games, since I like the feeling of really having to fight for something or build something cool up, the satisfaction is amazing.'
                p_4_about.innerHTML = 'I like to create website, as I love that you can see the final result (whioch always can be improved!), which is working, and others can see and interact with it. I think it is amazing how you are able to "play" with the different features in HTML, CSS and javascript, so you can get your website to have all possible functions <br><br> I find it interessting, how you can see the website from start to finish, getting better, more functional, as well as nicer set up.'
                p_5_about.innerHTML = '<h2>Education</h2> ∎ 2021 - Main course 1 at RTS as Digital Meida <br><br> ∎ 2020 - Practice at Layback <br><br> ∎ 2020 - Basic course 2 at RTS as Digital Media <br><br> ∎ 2019 - Basic course 1 at RTS as Digital Design <br><br> ∎ 2019 - 10th grade leaving examination <br><br> ∎ 2018 - 9th grade leaving examination'
            } else {
                console.log('NOT ABOUT')
            }
            // Checking if its project
            if (document.getElementById('site').classList.contains('project')) {
                console.log('PROJECT')

                // Translating the page
                projectIntroH2.innerHTML = 'Websites'
                projectIntroP.innerHTML = 'Here are some website i have created, using HTML, CSS and JS <br><br>(Newest first)'
                projectItem_1.innerHTML = 'Websites'
                projectItem_2.innerHTML = 'Illustrations'
                projectItem_3.innerHTML = 'Videos'
                projectIllustrationsH2.innerHTML = 'Illustrations'
                projectIllustrationsP.innerHTML = 'Here are some different projects I have created, with Blender, Maya and Illustrator.'
                projectFilmH2.innerHTML = 'Film and animations'
                projectFilmP.innerHTML = 'Here are some different projects i have made.'

            } else {
                console.log('NOT PROJECT')
            }
            // Checking if its archive
            if (document.getElementById('site').classList.contains('archive')) {
                var archiveWebTextDa = document.getElementsByClassName('archiveWebDa')
                var archiveWebTextEng = document.getElementsByClassName('archiveWebEng')

                archiveTitle_1.innerHTML = 'Websites'
                archiveText_1.innerHTML = 'Here are some website i have created, using HTML, CSS and JS <br><br>(Newest first)'
                archiveItem_1.innerHTML = 'Websites'
                archiveTitle_2.innerHTML = 'Illustrations'
                archiveText_2.innerHTML = 'Here are some different projects I have created.'
                archiveItem_2.innerHTML = 'Illustrations'

                // Translate the page
                for (let i = 0; i < archiveWebTextDa.length; i++) {
                    archiveWebTextDa[i].classList.add('hidden')
                }
                for (let i = 0; i < archiveWebTextEng.length; i++) {
                    archiveWebTextEng[i].classList.remove('hidden')
                }
            } else {
                console.log('NOT ARCHIVE')
            }
            // Translating universal stuff
            let danish_ = document.getElementsByClassName('danish-')
            let english_ = document.getElementsByClassName('english-')

            frontLink.innerHTML = 'Front';
            aboutLink.innerHTML = 'About';
            projectLink.innerHTML = 'Projects';
            archiveLink.innerHTML = 'Archive';
            contactLink.innerHTML = 'Contact';

            footerTitle_h1.innerHTML = 'Contact';

            for (let i = 0; i < danish_.length; i++) {
                danish_[i].classList.add('hidden')
            }
            for (let i = 0; i < english_.length; i++) {
                english_[i].classList.remove('hidden')
            }
        }, 10)
        translateText.innerHTML = 'English'
        translateDropdownText.innerHTML = 'Dansk'
    }
})

linkWrapper.appendChild(frontLink);
linkWrapper.appendChild(aboutLink);
linkWrapper.appendChild(projectLink);
linkWrapper.appendChild(archiveLink);
linkWrapper.appendChild(contactLink);

headerWrapper.appendChild(headerContainer);
headerContainer.appendChild(logoWrapper);
headerContainer.appendChild(linkWrapper);
headerContainer.appendChild(translateWrapper);

// ////////////////////////////////////////////////////////////////
// //////////////////////////////// Creating main stuff
// ////////////////////////////////////////////////////////////////

var mainWrapper = document.createElement('div')
mainWrapper.id = 'main__wrapper'

// ABOUT

var aboutWrapper = document.createElement('div');
aboutWrapper.id = 'about__wrapper';

var aboutFlex = document.createElement('div');
aboutFlex.className = 'flex-container om-mig__margin';

var aboutAside = document.createElement('aside');
aboutAside.className = 'col-50 padding paddingOm1 center';

var aboutArticle_1 = document.createElement('article')
aboutArticle_1.className = 'center'

var portrait = document.createElement('img')
portrait.className = 'om-mig__portrait'
portrait.src = 'assets/about/portrait.png'

aboutArticle_1.appendChild(portrait)

var aboutArticle_2 = document.createElement('article')
aboutArticle_2.className = 'om-mig__article'

var p_1_about = document.createElement('p')

p_1_about.innerHTML = 'Jeg hedder Jacob Hedengran Erholt, jeg er 19 år og bor i Frederikssund.'
var p_2_about = document.createElement('p')
p_2_about.innerHTML = 'For tiden går jeg i skolepraktik, som Digital Media elev. <br> Jeg har arbejdet med HTML, CSS, JS og PHP. Jeg har også kendskab til Illustrator, Photoshop, Wix og Wordpress, og Office pakken.'
var p_3_about = document.createElement('p')
p_3_about.innerHTML = 'I min fritid tilbringer jeg mange timer foran computeren, hvor jeg laver kreative sager, såsom hjemmesider og projekter i forskellige spil. Jeg spiller computerspil, da jeg godt kan lide følelsen af virkelig at skulle kæmpe for noget, eller bygge noget op, den tilfredsstillelse er fantastisk. <br> '
var p_4_about = document.createElement('p')
p_4_about.innerHTML = 'Jeg kan godt lide at lave hjemmesider, da jeg elsker at man kan se det endelige resultat (som altid kan forbedres!), hvor det virker og andre kan benytte sig af det. Jeg synes det er virkelig fedt, hvordan man kan lege med de forskellige egenskaber i html, css og javascript, så man kan få sin hjemmeside til at have alle mulige funktioner. <br><br> Jeg finder det interessant, hvordan man selv kan se fra start til slut, hvordan hjemmesiden bliver bedre og mere funktionelt, samt pænere sat op.'
var p_5_about = document.createElement('p')
p_5_about.className = 'om-mig__article__uddannelse'
p_5_about.innerHTML = '<h2>Uddannelse</h2> ∎ 2021 - Hovedeforløb 1 på RTS i Digital Media <br><br> ∎ 2020 - Praktik hos Layback <br><br> ∎ 2020 - Grundforløb 2 på RTS i Digital Media <br><br> ∎ 2019 - Grundforløb 1 på RTS i Digital Design <br><br> ∎ 2019 - 10. klasses afgangseksamen <br><br> ∎ 2018 - 9. klasses afgangseksamen'

aboutArticle_2.appendChild(p_1_about)
aboutArticle_2.appendChild(p_2_about)

var br_1_about = document.createElement('br');
var br_2_about = document.createElement('br');

var aboutSection = document.createElement('section');
aboutSection.className = 'col-50 padding paddingOm'
var aboutArticle_3 = document.createElement('article');
aboutArticle_3.className = 'om-mig__article';

aboutSection.appendChild(aboutArticle_3)

aboutArticle_3.appendChild(p_3_about)
aboutArticle_3.appendChild(p_4_about)
aboutArticle_3.appendChild(br_2_about)
aboutArticle_3.appendChild(p_5_about)

aboutAside.appendChild(aboutArticle_1)
aboutAside.appendChild(br_1_about)
aboutAside.appendChild(aboutArticle_2)

aboutFlex.appendChild(aboutAside)
aboutFlex.appendChild(aboutSection)
aboutWrapper.appendChild(aboutFlex)


// PROJECT
var projectWrapper = document.createElement('div');
projectWrapper.id = 'project__wrapper';

var projectAnchor_1 = document.createElement('a')
projectAnchor_1.className = 'siteAnchor'
projectAnchor_1.id = 'illustration'
var projectAnchor_2 = document.createElement('a')
projectAnchor_2.className = 'siteAnchor'
projectAnchor_2.id = 'film'

var projectHeaderWrapper = document.createElement('div')
projectHeaderWrapper.className = 'siteHeader__header'
projectHeaderWrapper.id = 'siteHeader__header'
var projectHeaderContaiener = document.createElement('div')
projectHeaderContaiener.className = 'siteHeader__container'
var projectItem_1 = document.createElement('a')
projectItem_1.className = 'siteHeader__item'
projectItem_1.href = '#'
projectItem_1.innerHTML = 'Hjemmesider'
var projectItem_2 = document.createElement('a')
projectItem_2.className = 'siteHeader__item'
projectItem_2.href = '#illustration'
projectItem_2.innerHTML = 'Illustrationer'
var projectItem_3 = document.createElement('a')
projectItem_3.className = 'siteHeader__item'
projectItem_3.href = '#film'
projectItem_3.innerHTML = 'Video'

projectHeaderContaiener.appendChild(projectItem_1)
projectHeaderContaiener.appendChild(projectItem_2)
projectHeaderContaiener.appendChild(projectItem_3)
projectHeaderWrapper.appendChild(projectHeaderContaiener)
projectWrapper.appendChild(projectHeaderWrapper)

var hr_1_project = document.createElement('hr')
var hr_2_project = document.createElement('hr')
var hr_3_project = document.createElement('hr')

var projectIntroWrapper = document.createElement('section');
projectIntroWrapper.className = 'padding max-width-center col-33'
var projectIntroBr = document.createElement('br')
projectIntroBr.className = 'pc'
var projectIntroH2 = document.createElement('h2')
projectIntroH2.className = 'title1'
projectIntroH2.innerHTML = 'Hjemmesider'
var projectIntroP = document.createElement('p')
projectIntroP.innerHTML = 'Her er nogle forskellige hjemmesider jeg har lavet, med HTML, JS og CSS <br><br>(Nyeste først)'

var websiteProContainer = document.createElement('section')
websiteProContainer.className = 'flexWrapper'

projectWebsitesJson
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data['website'].length; i++) {
            let websiteWrapper = document.createElement('a')
            websiteWrapper.className = 'container'
            websiteWrapper.target = '_blank'
            websiteWrapper.href = data['website'][i]['url']

            let websiteThumbnail = document.createElement('img')
            websiteThumbnail.className = 'image'
            websiteThumbnail.src = data['website'][i]['img']

            let websiteOverlay = document.createElement('div')
            websiteOverlay.className = 'overlay overlay1'

            let websiteTextWrapper = document.createElement('div')
            websiteTextWrapper.className = 'text'

            let titleNode = document.createTextNode(data['website'][i]['title'])
            let websiteTitle = document.createElement('h2')
            websiteTitle.className = 'title1 pcH smoltitle3'
            websiteTitle.appendChild(titleNode)

            let websiteTextDa = document.createElement('p')
            websiteTextDa.className = 'pcP smoltext1 hidden danish-'
            let websiteTextEng = document.createElement('p')
            websiteTextEng.className = 'pcP smoltext1 hidden english-'

            let br_1_website = document.createElement('br')
            let br_2_website = document.createElement('br')
            let br_3_website = document.createElement('br')
            let br_4_website = document.createElement('br')
            let br_5_website = document.createElement('br')

            let textNodeDa = document.createTextNode(data['website'][i]['textDa'])
            let textNodeEng = document.createTextNode(data['website'][i]['textEng'])

            websiteTextDa.appendChild(textNodeDa)
            websiteTextEng.appendChild(textNodeEng)

            websiteTextDa.appendChild(br_1_website)
            websiteTextDa.appendChild(br_2_website)

            websiteTextEng.appendChild(br_3_website)
            websiteTextEng.appendChild(br_4_website)

            let textNodeOpenDa = document.createTextNode(data['website'][i]['opensDa'])
            let textNodeOpenEng = document.createTextNode(data['website'][i]['opensEng'])

            websiteTextDa.appendChild(textNodeOpenDa)
            websiteTextEng.appendChild(textNodeOpenEng)

            websiteTextWrapper.appendChild(websiteTitle)
            websiteTextWrapper.appendChild(websiteTextDa)
            websiteTextWrapper.appendChild(websiteTextEng)

            websiteOverlay.appendChild(websiteTextWrapper)
            websiteWrapper.appendChild(websiteOverlay)
            websiteWrapper.appendChild(websiteThumbnail)
            websiteProContainer.appendChild(websiteWrapper)
            websiteProContainer.appendChild(br_5_website)
        }
    })
var projectIllustrationsWrapper = document.createElement('section');
projectIllustrationsWrapper.className = 'padding max-width-center col-33'
var projectIllustrationsBr = document.createElement('br')
projectIllustrationsBr.className = 'pc'
var projectIllustrationsH2 = document.createElement('h2')
projectIllustrationsH2.className = 'title1'
projectIllustrationsH2.innerHTML = 'Illustrationer'
var projectIllustrationsP = document.createElement('p')
projectIllustrationsP.innerHTML = 'Her er nogle forskellige projekter jeg har lavet, med Blender, Maya og Illustrator.'

var illuLightboxWrapperProject = document.createElement('div')
illuLightboxWrapperProject.id = 'lightbox-items'

var illuContainerProject = document.createElement('section')
illuContainerProject.className = 'flexWrapper'

projectIllustrationsJson
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data['illustrations'].length; i++) {
            let illuWrapper = document.createElement('div')
            illuWrapper.className = 'col-50 padding'

            let illuTitle = document.createElement('h2')
            illuTitle.className = 'title1'
            let titleNode = document.createTextNode(data['illustrations'][i]['title'])

            illuTitle.appendChild(titleNode)

            let illuTextDa = document.createElement('p')
            illuTextDa.className = 'hidden danish-'
            let illuTextEng = document.createElement('p')
            illuTextEng.className = 'hidden english-'
            let textNodeDa = document.createTextNode(data['illustrations'][i]['textDa'])
            let textNodeEng = document.createTextNode(data['illustrations'][i]['textEng'])

            illuTextDa.appendChild(textNodeDa)
            illuTextEng.appendChild(textNodeEng)

            illuWrapper.appendChild(illuTitle)
            illuWrapper.appendChild(illuTextDa)
            illuWrapper.appendChild(illuTextEng)

            for (let i1 = 0; i1 < data['illustrations'][i]['img'].length; i1++) {
                let illuImg = document.createElement('img')
                illuImg.className = data['illustrations'][i]['imgSize']
                illuImg.src = data['illustrations'][i]['img'][i1]

                illuWrapper.appendChild(illuImg)
            }
            illuContainerProject.appendChild(illuWrapper)
        }
    })
illuLightboxWrapperProject.appendChild(illuContainerProject)

var projectFilmWrapper = document.createElement('section');
projectFilmWrapper.className = 'padding max-width-center col-33'
var projectFilmBr = document.createElement('br')
projectFilmBr.className = 'pc'
var projectFilmH2 = document.createElement('h2')
projectFilmH2.className = 'title1'
projectFilmH2.innerHTML = 'Film og animation'
var projectFilmP = document.createElement('p')
projectFilmP.innerHTML = 'Her er nogle forskellige projekter jeg har lavet'

var filmContainer = document.createElement('section')
filmContainer.className = 'flexWrapper'

projectFilmJson
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data['film'].length; i++) {
            let filmWrapper = document.createElement('div')
            filmWrapper.className = 'col-50 padding'

            let filmTitle = document.createElement('h2')
            filmTitle.className = 'title1'

            let titleNode = document.createTextNode(data['film'][i]['title'])

            filmTitle.appendChild(titleNode)

            let filmTextDa = document.createElement('p')
            filmTextDa.className = 'hidden danish-'
            let filmTextEng = document.createElement('p')
            filmTextEng.className = 'hidden english-'

            let textNodeDa = document.createTextNode(data['film'][i]['textDa'])
            let textNodeEng = document.createTextNode(data['film'][i]['textEng'])

            filmTextDa.appendChild(textNodeDa)
            filmTextEng.appendChild(textNodeEng)

            let filmIframe = document.createElement('iframe')
            filmIframe.className = 'iframe'
            filmIframe.width = '700'
            filmIframe.height = '450'
            filmIframe.src = data['film'][i]['src']
            filmIframe.allowFullscreen = true

            filmWrapper.appendChild(filmTitle)
            filmWrapper.appendChild(filmTextDa)
            filmWrapper.appendChild(filmTextEng)
            filmWrapper.appendChild(filmIframe)

            filmContainer.appendChild(filmWrapper)
        }
    })

projectIntroWrapper.appendChild(projectIntroBr)
projectIntroWrapper.appendChild(projectIntroH2)
projectIntroWrapper.appendChild(projectIntroP)

projectIllustrationsWrapper.appendChild(projectIllustrationsBr)
projectIllustrationsWrapper.appendChild(projectIllustrationsH2)
projectIllustrationsWrapper.appendChild(projectIllustrationsP)

projectFilmWrapper.appendChild(projectFilmBr)
projectFilmWrapper.appendChild(projectFilmH2)
projectFilmWrapper.appendChild(projectFilmP)

// Project Websites
projectWrapper.appendChild(projectIntroWrapper)
projectWrapper.appendChild(websiteProContainer)
projectWrapper.appendChild(hr_1_project)

// Project Illustrations
projectWrapper.appendChild(projectAnchor_1)
projectWrapper.appendChild(projectIllustrationsWrapper)
projectWrapper.appendChild(illuLightboxWrapperProject)
projectWrapper.appendChild(hr_2_project)

// Project Videos
projectWrapper.appendChild(projectAnchor_2)
projectWrapper.appendChild(projectFilmWrapper)
projectWrapper.appendChild(filmContainer)
projectWrapper.appendChild(hr_3_project)









// ARCHIVE
var archiveWrapper = document.createElement('div');
archiveWrapper.id = 'archive__wrapper';

var archiveAnchor_1 = document.createElement('a')
archiveAnchor_1.className = 'siteAnchor'
archiveAnchor_1.id = 'illustration'

var hr_1_archive = document.createElement('hr')
var hr_2_archive = document.createElement('hr')
var hr_3_archive = document.createElement('hr')

var br_1_archive = document.createElement('br')
var br_2_archive = document.createElement('br')
br_1_archive.className = 'pc'
br_2_archive.className = 'pc'

var archiveHeaderWrapper = document.createElement('div')
archiveHeaderWrapper.className = 'siteHeader__header'
archiveHeaderWrapper.id = 'siteHeader__header'
var archiveHeaderContaiener = document.createElement('div')
archiveHeaderContaiener.className = 'siteHeader__container'
var archiveItem_1 = document.createElement('a')
archiveItem_1.className = 'siteHeader__item'
archiveItem_1.href = '#'
archiveItem_1.innerHTML = 'Hjemmesider'
var archiveItem_2 = document.createElement('a')
archiveItem_2.className = 'siteHeader__item'
archiveItem_2.href = '#illustration'
archiveItem_2.innerHTML = 'Illustrationer'

archiveHeaderContaiener.appendChild(archiveItem_1)
archiveHeaderContaiener.appendChild(archiveItem_2)
archiveHeaderWrapper.appendChild(archiveHeaderContaiener)

var archiveTitleContainer_1 = document.createElement('section')
archiveTitleContainer_1.className = 'padding max-width-center col-33'
var archiveTitle_1 = document.createElement('h2')
archiveTitle_1.className = 'title1'
archiveTitle_1.innerHTML = 'Hjemmesider'
var archiveText_1 = document.createElement('p')
archiveText_1.innerHTML = 'Her er nogle forskellige hjemmesider jeg har lavet, med HTML, JS og CSS <br><br>(Nyeste først)'

archiveTitleContainer_1.appendChild(br_1_archive)
archiveTitleContainer_1.appendChild(archiveTitle_1)
archiveTitleContainer_1.appendChild(archiveText_1)

websiteArcContainer = document.createElement('section')
websiteArcContainer.className = 'flexWrapper'

archivesWebsitesJson
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data['website'].length; i++) {
            let websiteWrapper = document.createElement('a')
            websiteWrapper.className = 'container'
            websiteWrapper.target = '_blank'
            websiteWrapper.href = data['website'][i]['url']

            let websiteThumbnail = document.createElement('img')
            websiteThumbnail.className = 'image'
            websiteThumbnail.src = data['website'][i]['img']

            let websiteOverlay = document.createElement('div')
            websiteOverlay.className = 'overlay overlay1'

            let websiteTextWrapper = document.createElement('div')
            websiteTextWrapper.className = 'text'

            let titleNode = document.createTextNode(data['website'][i]['title'])
            let websiteTitle = document.createElement('h2')
            websiteTitle.className = 'title1 pcH smoltitle3'
            websiteTitle.appendChild(titleNode)

            let websiteTextDa = document.createElement('p')
            websiteTextDa.className = 'pcP smoltext1 hidden danish-'
            let websiteTextEng = document.createElement('p')
            websiteTextEng.className = 'pcP smoltext1 hidden english-'

            let br_1_website = document.createElement('br')
            let br_2_website = document.createElement('br')
            let br_3_website = document.createElement('br')
            let br_4_website = document.createElement('br')
            let br_5_website = document.createElement('br')

            let textNodeDa = document.createTextNode(data['website'][i]['textDa'])
            let textNodeEng = document.createTextNode(data['website'][i]['textEng'])

            websiteTextDa.appendChild(textNodeDa)
            websiteTextEng.appendChild(textNodeEng)

            websiteTextDa.appendChild(br_1_website)
            websiteTextDa.appendChild(br_2_website)

            websiteTextEng.appendChild(br_3_website)
            websiteTextEng.appendChild(br_4_website)

            let textNodeOpenDa = document.createTextNode(data['website'][i]['opensDa'])
            let textNodeOpenEng = document.createTextNode(data['website'][i]['opensEng'])

            websiteTextDa.appendChild(textNodeOpenDa)
            websiteTextEng.appendChild(textNodeOpenEng)

            websiteTextWrapper.appendChild(websiteTitle)
            websiteTextWrapper.appendChild(websiteTextDa)
            websiteTextWrapper.appendChild(websiteTextEng)

            websiteOverlay.appendChild(websiteTextWrapper)
            websiteWrapper.appendChild(websiteOverlay)
            websiteWrapper.appendChild(websiteThumbnail)
            websiteArcContainer.appendChild(websiteWrapper)
            websiteArcContainer.appendChild(br_5_website)
        }
    })


var archiveTitleContainer_2 = document.createElement('section')
archiveTitleContainer_2.className = 'padding max-width-center col-33'
var archiveTitle_2 = document.createElement('h2')
archiveTitle_2.className = 'title1'
archiveTitle_2.innerHTML = 'Illustrationer'
var archiveText_2 = document.createElement('p')
archiveText_2.innerHTML = 'Her er nogle forskellige projekter jeg har lavet, i min fritid.'

archiveTitleContainer_2.appendChild(br_2_archive)
archiveTitleContainer_2.appendChild(archiveTitle_2)
archiveTitleContainer_2.appendChild(archiveText_2)

var illuArcWrapper = document.createElement('div')
illuArcWrapper.className = 'pointer padding'

var illuLightboxWrapperArchive = document.createElement('div')
illuLightboxWrapperArchive.id = 'lightbox-items'

var illuContainerArchive = document.createElement('section')
illuContainerArchive.className = 'flexWrapper center-wrap'

archivesIllustrationsJson
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data['illustrations'].length; i++) {
            for (let i1 = 0; i1 < data['illustrations'][0]['img'].length; i1++) {
                let imgSmall = document.createElement('img')
                imgSmall.className = 'tegningSmall'
                imgSmall.src = data['illustrations'][0]['img'][i1]
                illuContainerArchive.appendChild(imgSmall)
            }
        }
    })

illuLightboxWrapperArchive.appendChild(illuContainerArchive)
illuArcWrapper.appendChild(illuLightboxWrapperArchive)


archiveWrapper.appendChild(archiveHeaderWrapper)
archiveWrapper.appendChild(archiveTitleContainer_1)
archiveWrapper.appendChild(websiteArcContainer)
archiveWrapper.appendChild(hr_1_archive)
archiveWrapper.appendChild(archiveAnchor_1)
archiveWrapper.appendChild(archiveTitleContainer_2)
archiveWrapper.appendChild(illuArcWrapper)
archiveWrapper.appendChild(hr_2_archive)

// ////////////////////////////////////////////////////////////////
// //////////////////////////////// Creating the footer
// ////////////////////////////////////////////////////////////////

var footerWrapper = document.getElementById('footer-wrapper');

var footerAnchor = document.createElement('a');
footerAnchor.id = '1';
footerAnchor.className = 'anchor';

var footerWrapper_da = document.createElement('div');
footerWrapper_da.className = 'footerContainer';
footerWrapper_da.id = 'footerContainer';

var footerTitle_h1 = document.createElement('h1');
footerTitle_h1.className = 'footerTitle';
footerTitle_h1.innerHTML = 'Kontakt';

var footerWrapper_link = document.createElement('div');
footerWrapper_link.id = 'footer-link';

var footerFlex_1 = document.createElement('div');
footerFlex_1.className = 'flexWrapper max-width-center';

footerJsonFetch
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data['footer'].length; i++) {
            // Making the footer contents wrapper
            let wrapper = document.createElement('div')
            if (i < 2) {
                wrapper.className = 'col-50 footerText footerPadding footerBox'
            } else {
                wrapper.className = 'col-33 footerText footerPadding footerBox'
            }
            // Making the title for the footer content
            let fontIcon = document.createElement('i')
            fontIcon.className = data['footer'][i]['fontAwesomeIcon']

            let spaceBetween = document.createElement('i')
            spaceBetween.innerHTML = '&nbsp&nbsp'

            let footerTitleNodeDa = document.createTextNode(data['footer'][i]['titleDa'])
            let footerTitleNodeEng = document.createTextNode(data['footer'][i]['titleEng'])

            let footerTitleDa = document.createElement('span')
            footerTitleDa.className = 'danish-'
            let footerTitleEng = document.createElement('span')
            footerTitleEng.className = 'hidden english-'

            footerTitleDa.appendChild(footerTitleNodeDa)
            footerTitleEng.appendChild(footerTitleNodeEng)

            let footerTitleWrapper = document.createElement('h2')
            footerTitleWrapper.className = "footerTitle footerItem"

            footerTitleWrapper.appendChild(fontIcon)
            footerTitleWrapper.appendChild(spaceBetween)
            footerTitleWrapper.appendChild(footerTitleDa)
            footerTitleWrapper.appendChild(footerTitleEng)

            // Making the content of the footer
            let footerTextNodeDa = document.createTextNode(data['footer'][i]['textDa'])
            let footerTextNodeEng = document.createTextNode(data['footer'][i]['textEng'])

            let footerTextDa = document.createElement('span')
            footerTextDa.className = 'danish-'
            let footerTextEng = document.createElement('span')
            footerTextEng.className = 'hidden english-'

            footerTextDa.appendChild(footerTextNodeDa)
            footerTextEng.appendChild(footerTextNodeEng)

            let footerBr_1 = document.createElement('br')
            let footerBr_2 = document.createElement('br')

            // Making the Url / phone number 
            if (data['footer'][i]['url'] == "noUrl") {
                let footerLinkNode = document.createTextNode(data['footer'][i]['number'])
                let footerLinkNoUrl = document.createElement('span')

                footerLinkNoUrl.appendChild(footerLinkNode)
                setTimeout(function () {
                    footerTextWrapper.appendChild(footerLinkNoUrl)
                }, 10)
            } else {
                let footerLinkNode = document.createTextNode(data['footer'][i]['urlText'])
                let footerLinkUrl = document.createElement('a')
                footerLinkUrl.href = data['footer'][i]['url']
                footerLinkUrl.className = 'link'
                footerLinkUrl.target = '_blank'

                footerLinkUrl.appendChild(footerLinkNode)
                setTimeout(function () {
                    footerTextWrapper.appendChild(footerLinkUrl)
                }, 10)
            }

            let footerTextWrapper = document.createElement('p')
            footerTextWrapper.className = 'footerText'

            footerTextWrapper.appendChild(footerTextDa)
            footerTextWrapper.appendChild(footerTextEng)
            footerTextWrapper.appendChild(footerBr_1)
            footerTextWrapper.appendChild(footerBr_2)

            // Assembling the footer
            wrapper.appendChild(footerTitleWrapper)
            wrapper.appendChild(footerTextWrapper)
            footerFlex_1.appendChild(wrapper)
        }
    })

footerWrapper_link.appendChild(footerFlex_1);

var madebyWrapper = document.createElement('div');
madebyWrapper.className = 'footer-infobox';
var madebyText = document.createElement('p');
madebyText.className = 'footer-text-info footer-info';
madebyText.innerHTML = 'Denne hjemmeside er lavet af Jacob Erholt';

madebyWrapper.appendChild(madebyText);

footerWrapper.appendChild(footerAnchor);
footerWrapper.appendChild(footerWrapper_da);
footerWrapper_da.appendChild(footerTitle_h1);
footerWrapper_da.appendChild(footerWrapper_link);
footerWrapper_da.appendChild(madebyWrapper);

