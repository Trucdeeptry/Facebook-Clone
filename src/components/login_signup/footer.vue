<template>
    <footer class="p-12 bg-white m-0 w-full">
        <div>
            <ul>
                <li class="list-items">English (UK)</li>
                <li class="list-items">
                    <a class="list-items" href="#">中文(简体)</a>
                </li>
                <li class="list-items">
                    <a class="list-items" href="#">Bahasa Indonesia</a>
                </li>
                <li class="list-items">
                    <a class="list-items" href="#">日本語</a>
                </li>
                <li class="list-items">
                    <a class="list-items" href="#">ภาษาไทย</a>
                </li>
                <li class="list-items">
                    <a class="list-items" href="#">Tiếng Việt</a>
                </li>
                <li class="list-items">
                    <a class="list-items" href="#">한국어</a>
                </li>
                <li class="list-items">
                    <a class="list-items" href="#">Español</a>
                </li>
                <li class="list-items">
                    <a class="list-items" href="#">Português (Brasil)</a>
                </li>
                <li class="list-items">
                    <a class="list-items" href="#">Français (France)</a>
                </li>
                <li class="list-items">
                    <a class="list-items" href="#">Deutsch</a>
                </li>
                <button type="button" class="plus-button">+</button>
            </ul>
            <div class="line-2 reduce-margin"></div>
            <ul>
                <li class="list-items">
                    <a class="list-items" href="#">Messenger</a>
                </li>
                <li class="list-items">
                    <a class="list-items" href="#">Fb Lite</a>
                </li>
                <li class="list-items"><a class="list-items" href="#">Watch</a></li>
                <li class="list-items">
                    <a class="list-items" href="#">People</a>
                </li>
                <li class="list-items"><a class="list-items" href="#">Pages</a></li>
                <li class="list-items">
                    <a class="list-items" href="#">Page Categories</a>
                </li>
                <li class="list-items">
                    <a class="list-items" href="#">Places</a>
                </li>
                <li class="list-items"><a class="list-items" href="#">Games</a></li>
                <li class="list-items">
                    <a class="list-items" href="#">Locations</a>
                </li>
                <li class="list-items">
                    <a class="list-items" href="#">Marketplace</a>
                </li>
                <li class="list-items">
                    <a class="list-items" href="#">Fb Pay</a>
                </li>
                <li class="list-items">
                    <a class="list-items" href="#">Groups</a>
                </li>
                <li class="list-items"><a class="list-items" href="#">Jobs</a></li>
                <li class="list-items">
                    <a class="list-items" href="#">Occulus</a>
                </li>
                <li class="list-items">
                    <a class="list-items" href="#">Portal</a>
                </li>
                <li class="list-items">
                    <a class="list-items" href="#">Instagram</a>
                </li>
                <li class="list-items"><a class="list-items" href="#">Local</a></li>
                <li class="list-items">
                    <a class="list-items" href="#">Fundraisers</a>
                </li>
                <li class="list-items">
                    <a class="list-items" href="#">Services</a>
                </li>
                <li class="list-items">
                    <a class="list-items" href="#">Spark AR</a>
                </li>
                <li class="list-items">
                    <a class="list-items" href="#">Shops</a>
                </li>
                <li class="list-items">
                    <a class="list-items" href="#">Voting Information Centre</a>
                </li>
                <li class="list-items"><a class="list-items" href="#">About</a></li>
                <li class="list-items">
                    <a class="list-items" href="#">Create ad</a>
                </li>
                <li class="list-items">
                    <a class="list-items" href="#">Create Page</a>
                </li>
                <li class="list-items">
                    <a class="list-items" href="#">Developers</a>
                </li>
                <li class="list-items">
                    <a class="list-items" href="#">Careers</a>
                </li>
                <li class="list-items">
                    <a class="list-items" href="#">Privacy</a>
                </li>
                <li class="list-items">
                    <a class="list-items" href="#">Cookies</a>
                </li>
                <li class="list-items">
                    <a class="list-items" href="#">AdChoices</a>
                </li>
                <li class="list-items"><a class="list-items" href="#">Terms</a></li>
                <li class="list-items"><a class="list-items" href="#">Help</a></li>
            </ul>
        </div>
    </footer>
</template>

<style scoped>
/* 1) margin left in left-box to adjust form to the right;

2) can change gifs as well instead of using christmas gif,
can also use this sparking dots/droplets gifs -> https://i.imgur.com/LLoz1n1.gif
-> this one blends with the original facebook color #f0f2f5, tried & tested liao,
anyway I added that sparking dots gif in my footer.

3) Line 240 - 369 are codes to adjust for mobile responsivness in bigger phones and tablets

4) Line 370 onwards are codes to adjust for mobile responsiveness in normal/smaller handphones. */

.global-container {
    margin: 0 auto;
    position: relative;
}

/*
  Most of the background images --> spring.gif, summer.gif, autumn.gif are resized to 1262px based on my findings/measurements using http://gifgifs.com/resizer/ 
  Only winter.gif is using the original dimensions 1000px (width) as downloaded.
  Commented out the default background-image --> because if we have a default bg image --> it will load first (CSS loads first) --> Then JS file loads to change to something else --> Can be seen as intermittent switch in UI --> Not very pleasant
*/

.bigger-box {
    padding-bottom: 112px;
    padding-top: 72px;
    min-width: 500px;
}

.big-box {
    display: block;
    width: 1262px;
    margin: 0 auto;
    padding: 20px 0;
    position: relative;
}

.left-box {
    width: 400px;
    box-sizing: border-box;
    margin-left: 150px;
    margin-right: 20px;
    padding-right: 32px;
    display: inline-block;
    vertical-align: top;
}

.image-box {
    padding: 112px 0 16px;
}

.fb-logo {
    height: 106px;
    margin: -28px;
    border: 0;
}

.logo-caption {
    font-family: SFProDisplay-Regular, Helvetica, Arial, sans-serif;
    font-size: 28px;
    font-weight: normal;
    line-height: 28px;
    width: 490px;
    padding: 0 0 20px;
    display: inline-block;
    letter-spacing: normal;
    margin: 0px;
}

.right-box {
    display: inline-block;
    vertical-align: top;
    height: 456px;
    width: 396px;
}

@media only screen and (max-width: 1125px) {
    .right-box {
        float: right;
    }
}

.email-box {
    border-radius: 6px;
    font-size: 17px;
    padding: 14px 16px;
    width: 330px;
    background: white;
    border: 1px solid lightgray;
    height: 22px;
    line-height: 16px;
    vertical-align: middle;
}

.pw-box {
    border-radius: 6px;
    font-size: 17px;
    padding: 14px 16px;
    width: 330px;
    background: white;
    border: 1px solid lightgray;
    height: 22px;
    line-height: 16px;
    vertical-align: middle;
}

.email-box:focus,
.pw-box:focus {
    outline: 1px solid rgb(25, 120, 243);
    outline-offset: -2px;
}

.login-button {
    background-color: rgb(25, 120, 243);
    border: none;
    border-radius: 6px;
    font-size: 20px;
    color: white;
    line-height: 48px;
    padding: 0 16px;
    width: 364px;
    vertical-align: middle;
}

.login-button:hover {
    background-color: rgb(23, 112, 230);
    cursor: pointer;
}

.create-button {
    border: none;
    border-radius: 6px;
    font-size: 17px;
    line-height: 48px;
    padding: 0 16px;
    background-color: rgb(67, 184, 43);
    color: white;
    margin-left: 90px;
    margin-top: 24px;
    margin-bottom: 24px;
}

.create-button:hover {
    background-color: rgb(55, 165, 33);
    cursor: pointer;
}

.line {
    align-items: center;
    border-bottom: 1px solid lightgray;
    display: flex;
    margin: 6px 16px 0px;
    text-align: center;
}

.adjust-forgot-pw {
    margin-left: 107.5px;
    color: rgb(25, 120, 243);
    font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
    font-size: 14px;
}

.form-container {
    align-items: center;
    background-color: white;
    border: none;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    box-sizing: border-box;
    width: 397px;
    height: 345px;
    margin: 40px;
    padding: 10px;
    margin-left: 150px;
}

.space {
    padding: 6px;
}

.spaceTwo {
    padding: 0px 6px;
}

.adjust {
    margin: 10px;
}

.adjustTwo {
    margin: 10px 10px 16px;
}

a {
    text-decoration: none;
    cursor: pointer;
}

a:hover {
    color: rgb(25, 120, 243);
    text-decoration: underline;
}

.bottom-link-box {
    color: #1c1e21;
    font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: normal;
    padding-top: 0;
    margin-top: -12.5px;
    margin-left: 150px;
    text-align: center;
    width: 400px;
    height: 100px;
}

.bottom-link {
    color: black;
}

.bottom-link:hover {
    color: black;
    text-decoration: underline;
}

body {
    background: #fff;
    color: rgb(27, 29, 32);
    direction: ltr;
    line-height: 1.34;
    margin: 0;
    padding: 0;
    unicode-bidi: embed;
}

.list-items {
    display: inline-block;
    font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
    color: rgb(138, 141, 145);
    font-size: 12px;
    margin: 2.5px;
}

.list-items:hover {
    color: rgb(138, 141, 145);
    text-decoration: underline;
}

.plus-button {
    width: 25px;
    font-weight: bold;
    font-size: 10px;
}

.line-2 {
    align-items: center;
    border-bottom: 1px solid lightgray;
    display: flex;
    margin: 20px 16px;
    text-align: center;
}

.fb-clone {
    font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
    color: rgb(138, 141, 145);
    font-size: 11px;
    margin-left: 45px;
    margin-bottom: 16px;
}

.fb-clone-link {
    font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
    color: rgb(138, 141, 145);
    font-size: 11px;
}

footer {
    text-align: justify;
    background-image: url(https://i.imgur.com/LLoz1n1.gif);
    display: block;
    width: 1200px;
    margin: 0 auto;
}

.reduce-margin {
    margin-top: 0px;
    margin-bottom: 0px;
}
.add_account:hover {
    box-shadow: 0 1px 8px 5px #dddfe2 !important;
}
.add_account {
    transition: all 0.2s ease-out;
}

/* Line 240 - 369 are codes to adjust for mobile responsivness in bigger phones and tablets */
@media only screen and (max-width: 1125px) {
    .bigger-box {
        padding-bottom: 170px;
        padding-top: 0px;
        margin-top: -90px;
    }

    .big-box {
        display: flex;
        flex-direction: column;
        text-align: center;
        height: 496px;
        margin: 0 40px;
        width: auto;
    }

    .left-box {
        margin: 0 auto;
        padding: 0;
    }

    .logo-caption {
        font-size: 24px;
        line-height: 28px;
        width: auto;
        padding: 0;
    }

    .right-box {
        float: none;
        margin: 0 auto;
        padding: 40px;
    }

    .form-container {
        float: none;
        margin: 0 auto;
    }

    .adjust {
        float: none;
        margin: 1 auto;
        height: 25px;
    }

    .adjust-forgot-pw {
        float: none;
        margin: 0 auto;
        height: 25px;
    }

    .spaceTwo {
        margin-bottom: 16px;
    }

    .line {
        margin: 10px 8px;
    }

    .create-button {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .bottom-link-box {
        float: none;
        margin: 0 auto;
        margin-top: 25px;
        height: 25px;
    }

    footer {
        margin: 20px;
        margin-right: 55px;
        width: auto;
    }

    ul {
        margin: 0px;
        width: auto;
    }

    .line-2 {
        margin: 7.5px;
        margin-left: 45px;
        width: auto;
    }

    .fb-clone {
        margin-top: 10px;
        width: auto;
    }
}

/* Line 370 onwards are codes to adjust for mobile responsiveness in normal/smaller handphones. */
@media only screen and (max-width: 480px) {
    .global-container {
        width: fit-content;
        height: fit-content;
    }

    .contains-top-half-and-footer-bottom-half {
        width: fit-content;
        height: fit-content;
    }

    body {
        width: fit-content;
        height: fit-content;
    }
}
</style>
