<template>
  <loadingPage v-if="isLoginLoading"></loadingPage>
  <div v-else>
    <div class="contains-top-half-and-footer-bottom-half">
      <div class="global-container">
        <div class="bigger-box" style="background-size: cover; background-color: #f2f4f7">
          <div class="big-box">
            <div class="left-box">
              <img class="demo-logo max-h-10 object-contain" src="/img/home/demo-logo.png" alt="" style="
                  width: 60%;

                  margin-bottom: 0px;
               
                " />

              <h2 class="logo-caption" style="padding: 0; font-size: 36px; color: #333">
                Recent logins
              </h2>
              <p style="color: #606770">Click your picture or add an account</p>
              <div class="recent_login mt-7 flex flex-wrap items-center justify-start gap-3">
                <div class="account_logged add_account relative group" v-for="user in recentUsers" :key="user.email"
                  @click="
                    isOpenUserForm = true;
                  userSelected = user;
                  ">
                  <i @click.stop="removeAccount(user.email)"
                    class="absolute group-hover:scale-150 group-hover:text-white origin-bottom-right fa-solid fa-circle-xmark text-lg left-1 transition-all cursor-pointer"></i>

                  <img :src="user.avatar" alt="user avt" class="object-cover w-[160px] h-[150px] rounded-t-md" />

                  <div class="bg-white flex-grow flex items-center justify-center rounded-b-md">
                    <p class="text-[#0866ff] text-lg p-3">
                      {{ user.surname }}
                    </p>
                  </div>
                </div>
                <div class="add_account" @click="isOpenForm = true" style="
                    box-shadow: 0 0 0 1px #dddfe2;
                    display: inline-block;
                    cursor: pointer;
                  ">
                  <div class="plus" style="
                      width: 160px;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      height: 150px;
                      border-top-left-radius: 8px;
                      border-top-right-radius: 8px;
                    ">
                    <div class="plus_icon" style="
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 100%;
                        background-color: #0866ff;
                        width: 40px;
                        height: 40px;
                        padding: 2px;
                      ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="width: 32px; height: 32px"
                        fill="white">
                        <path
                          d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                      </svg>
                    </div>
                  </div>
                  <div class="add_button text-lg" style="
                      padding: 12px;
                      color: #0866ff;
                      width: 160px;
                      border-bottom-left-radius: 8px;
                      border-bottom-right-radius: 8px;
                      text-align: center;
                      background-color: white;
                    ">
                    Add Account
                  </div>
                </div>
              </div>
            </div>
            <div class="right-box">
              <loginForm :isShowRemember="true" :isShowSignup="true"></loginForm>
              <div class="bottom-link-box">
                <a class="bottom-link" href="#"><b> This is a student project for learning purposes only. Do NOT
                    enter real Facebook credentials.
                  </b></a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <baseFooter></baseFooter>
    <!-- form for add login -->
    <Transition name="fade">
      <div v-if="isOpenForm" @click="isOpenForm = false"
        class="bg-[rgb(0,0,0,0.4)] fixed w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <loginForm class="!mx-auto !mt-28" :isShowRemember="true" @click.stop>
          <template #default>
            <div class="border-b-2 p-4 my-2 flex items-center relative justify-between">
              <h1 class="text-xl text-center flex-grow">Log in to Facebook</h1>
              <i class="fa-solid absolute -top-2 right-0 fa-circle-xmark text-4xl hover:text-[#74C0FC] cursor-pointer"
                @click="isOpenForm = false"></i>
            </div>
          </template>
        </loginForm>
      </div>
    </Transition>

    <!-- form for recent login -->
    <Transition name="fade">
      <div v-if="isOpenUserForm" @click="isOpenUserForm = false"
        class="bg-[rgb(0,0,0,0.4)] fixed w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <loginForm @click.stop class="!mx-auto !mt-28 relative" :EmailInputText="userSelected.email"
          :isShowRemember="true">
          <template #avatar>
            <i class="fa-solid absolute top-3 right-3 fa-circle-xmark text-4xl hover:text-[#74C0FC] cursor-pointer"
              @click="isOpenUserForm = false"></i>
            <img :src="userSelected.avatar" class="mt-7 object-cover w-48 h-48 rounded-full m-auto" alt="" />
            <p class="mb-7 mt-1 text-lg text-center">
              {{
                userSelected.firstname + " " + userSelected.surname
              }}
            </p>
          </template>
        </loginForm>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import baseFooter from "../../components/login_signup/footer.vue";
import loginForm from "../../components/login_signup/loginForm.vue";
import loadingPage from "../loadingPage.vue"
// declare tools
const isLoginLoading = ref(true)
const store = useStore();
const router = useRouter();
// hanlde form add login
const isOpenForm = ref(false);
// hanlde form recent login
const isOpenUserForm = ref(false);
const userSelected = ref({});
// hanlde get recent login
let emailUsers = ref(JSON.parse(localStorage.getItem("recentUsers")));
let recentUsers = ref([]);
// get recent users
async function getUserInfo(emails) {
  recentUsers.value = await store.dispatch("auth/getInfo", emails);
}
// if emailUsers change, change display recent logins user list
watch(emailUsers, () => {
  getUserInfo(emailUsers.value);
});
// hanlde remove login
function removeAccount(emailRemove) {
  emailUsers.value = emailUsers.value.filter((email) => email != emailRemove);
  localStorage.setItem("recentUsers", JSON.stringify(emailUsers.value));
}

onMounted(async () => {
  getUserInfo(emailUsers.value);
  isLoginLoading.value = false
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-leave-to {
  opacity: 0;
}

.global-container {
  margin: 0 auto;
  position: relative;
}

.bigger-box {
  padding-bottom: 112px;
  padding-top: 72px;
  min-width: 500px;
}

#toggleEyeIcon:hover {
  background-color: rgb(27, 29, 32, 0.1);

  border-radius: 100%;
}

.big-box {
  display: flex;
  width: 1262px;
  margin: 0 auto;
  padding: 20px 0;
  position: relative;
}

.left-box {
  margin-top: -30px;
  width: 400px;
  box-sizing: border-box;
  margin-left: 150px;
  margin-right: 20px;
  padding-right: 32px;
  display: inline-block;
  vertical-align: top;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: start;
}

.image-box {
  padding: 112px 0 16px;
}

.demo-logo {
  margin-left: -20px;
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
  margin: 10px 0;
}

.right-box {
  display: inline-block;
  vertical-align: top;
}

@media only screen and (max-width: 1125px) {
  .right-box {
    float: right;
  }
}

.email-box {
  border-radius: 6px;
  font-size: 17px;
  padding: 25px 16px;
  width: 100%;
  background: white;
  border: 1px solid lightgray;
  height: 22px;
  line-height: 16px;
  vertical-align: middle;
}

.pw-box {
  border-radius: 6px;
  font-size: 17px;
  padding: 25px 16px;
  width: 100%;
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
  width: 100%;
  vertical-align: middle;
  margin-top: 4px;
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
  margin: 40px;
  padding: 10px;
  margin-left: 150px;
}

.space {
  padding: 6px;
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
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
  border-radius: 3px;
  cursor: pointer;
}

/* Line 240 - 369 are codes to adjust for mobile responsivness in bigger phones and tablets */
@media only screen and (max-width: 1125px) {
  .bigger-box {
    padding-bottom: 170px;
    padding-top: 0px;
    margin-top: -90px;
  }

  .demo-logo {
    height: 106px;
    border: 0;
    object-fit: contain;
    margin: auto;
  }

  .big-box {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 40px;
    width: auto;
  }

  .left-box {
    margin: 0 auto;
    padding: 0;
    margin-top: 100px;
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
