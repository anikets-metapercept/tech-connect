import {
  clearError,
  emailValidation,
  firstNameValidation,
  lastNameValidation,
  phoneValidation,
} from "./FormValidation.js";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import personIcon from "../../assets/contact/person.svg";
import phoneIcon from "../../assets/contact/phone.svg";
import descriptionIcon from "../../assets/contact/description.svg";
import captchaIcon from "../../assets/contact/captcha.svg";
import emailIcon from "../../assets/contact/email.svg";
import countryIcon from "../../assets/contact/country.svg";
import refreshIcon from "../../assets/contact/refresh.svg";
import titleIcon from "../../assets/contact/title.svg";
import locationIcon from "../../assets/contact/location.svg";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function ContactForm() {
  const hiddenInputRef = useRef(null);

  const query = useQuery();

  function privacyAlert1832254000001456002() {
    var privacyTool = document.getElementById("privacyTool1832254000001456002");
    var privacyErr = document.getElementById("privacyErr1832254000001456002");
    if (privacyTool != undefined && !privacyTool.checked) {
      privacyErr.style.visibility = "visible";
      privacyTool.focus();
      return false;
    }
    return true;
  }

  function disableErr1832254000001456002() {
    var privacyTool = document.getElementById("privacyTool1832254000001456002");
    var privacyErr = document.getElementById("privacyErr1832254000001456002");
    if (
      privacyTool != undefined &&
      privacyTool.checked &&
      privacyErr != undefined
    ) {
      privacyErr.style.visibility = "hidden";
    }
  }

  function reloadImg1832254000001456002() {
    var captcha = document.getElementById("imgid1832254000001456002");
    if (captcha.src.indexOf("&d") !== -1) {
      captcha.src =
        captcha.src.substring(0, captcha.src.indexOf("&d")) +
        "&d" +
        new Date().getTime();
    } else {
      captcha.src = captcha.src + "&d" + new Date().getTime();
    }
  }

  const isFormValid = (e) => {
    let inputs = Array.from(e.target);
    // inputs.pop();
    inputs = inputs.slice(5, 13);
    for (let input of inputs) {
      if (input.value.length == 0) {
        const errorMessage = input.getAttribute("errordiv");
        const errorMessageDiv = document.getElementById(errorMessage);
        errorMessageDiv.style.display = "block";

        errorMessageDiv.innerHTML = "Please fill out this field";
        break;
      }
    }

    // ==========================================
    const ErrorMsg = document.getElementsByClassName("errorMessage");
    let count = 0;
    for (let ele of ErrorMsg) {
      if (ele.style.display == "block") count++;
    }
    if (count) {
      e.preventDefault();
    }
    return count ? false : true;
  };

  function checkMandatory1832254000001456002(e) {
    if (isFormValid(e)) {
      if (privacyAlert1832254000001456002()) {
        return true;
      } else {
        e.preventDefault();
        return false;
      }
    } else {
      e.preventDefault();
      return false;
    }
  }

  useEffect(() => {
    let planId = query.get("planId") || "";
    let planType = query.get("planType") || "";

    hiddenInputRef.current.value = `metR-Contact-Us-Form (selected Plan: ${planId} (${planType}))`;
  }, [query]);

  return (
    <>
      <style jsx="true">
        {`
          .errorMessage {
            display: none;

            color: #cd5c5c;
          }

          button:disabled {
            background-color: #ffad01 !important;
            cursor: default;
          }
          form i {
            // color: rgb(108, 96, 254);
            color: #fcb713;
          }
          form input,
          form select,
          form textarea {
            //border: none;
            outline: none;
          }
        `}
      </style>
      <div className="flex justify-center items-center w-full flex-col lg:flex-row gap-5 md:gap-10 py-5 lg:py-14 max-w-screen-2xl mx-auto px-4 lg:px-10">
        <div className="w-full flex justify-center items-center gap-1 flex-col mb-10">
          <div className="mt-10 flex flex-col-reverse md:flex-col-reverse gap-5 items-center lg:items-start justify-center lg:justify-start lg:flex-row w-full">
            {/* Contact Form */}
            <div
              id="crmWebToEntityForm"
              className="zcwf_lblLeft crmWebToEntityForm w-full md:w-[80%] lg:w-[70%] px-3 py-8 rounded-[18px] shadow-md bg-[#f5f5f5]"
            >
              <form
                id="webform1832254000001456002"
                action="https://crm.zoho.com/crm/WebToContactForm "
                name="WebToContacts1832254000001456002"
                method="POST"
                onSubmit={checkMandatory1832254000001456002}
                acceptCharset="UTF-8"
                className="space-y-6"
              >
                <div className="space-y-6">
                  <input
                    type="text"
                    style={{ display: "none" }}
                    name="xnQsjsdp"
                    defaultValue="f7b3c0e0b47b03d6e8e36721448f062fcc1e5e9b90b19af02de72d76fddcf570"
                  />
                  <input
                    type="hidden"
                    name="zc_gad"
                    id="zc_gad"
                    defaultValue=""
                  />
                  <input
                    type="text"
                    style={{ display: "none" }}
                    name="xmIwtLD"
                    defaultValue="2c9b6516916ff1bc3f0724e46ac40081695d1f5f9351582b480dc9fb7aad8acddc48f3ba8494407fee4ce9a8237481af"
                  />
                  <input
                    type="text"
                    style={{ display: "none" }}
                    name="actionType"
                    defaultValue="Q29udGFjdHM="
                  />
                  <input
                    type="text"
                    hidden
                    id="CONTACTCF5"
                    name="CONTACTCF5"
                    maxLength="255"
                    defaultValue="metR-Contact-Us-Form"
                    ref={hiddenInputRef}
                  ></input>
                  <div className="grid grid-cols-1 md:grid-cols-2 place-items-start gap-6">
                    <div className="flex items-start justify-center flex-col w-full">
                      <div className="flex items-center justify-center w-full gap-3 border px-3 py-1.5 border-[rgba(89,89,89,1)] rounded-xl bg-white">
                        <img
                          src={personIcon}
                          alt="person icon"
                          className="w-5 h-5"
                        />
                        <input
                          type="text"
                          id="First_Name"
                          name="First Name"
                          maxLength={40}
                          errordiv="errorFIRSTNAME"
                          onBlur={firstNameValidation}
                          onFocus={() => clearError("errorFIRSTNAME")}
                          placeholder="First Name*"
                          className="w-full py-2 text-[16px] text-[#595959] placeholder:text-[#595959] bg-transparent focus:outline-none font-semibold autofill:bg-white"
                        />
                      </div>
                      <div className="zcwf_col_help" />
                      <p className="errorMessage pl-2 mt-2" id="errorFIRSTNAME">
                        error div
                      </p>
                    </div>
                    <div className="flex items-start justify-center flex-col w-full">
                      <div className="flex items-center justify-center gap-3 w-full border px-3 py-1.5 border-[rgba(89,89,89,1)] rounded-xl bg-white">
                        <img
                          src={personIcon}
                          alt="person icon"
                          className="w-5 h-5"
                        />
                        <input
                          type="text"
                          id="Last_Name"
                          name="Last Name"
                          maxLength={80}
                          errordiv="errorLASTNAME"
                          onBlur={lastNameValidation}
                          onFocus={() => clearError("errorLASTNAME")}
                          placeholder="Last Name*"
                          className="w-full py-2 text-[16px] text-[#595959] placeholder:text-[#595959] bg-transparent focus:outline-none font-semibold"
                        />
                      </div>
                      <div className="zcwf_col_help" />
                      <p className="errorMessage pl-2 mt-2" id="errorLASTNAME">
                        error div
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 place-items-start gap-6">
                    <div className="flex items-start justify-center flex-col w-full">
                      <div className="flex items-center justify-center gap-3 w-full border px-3 py-1.5 border-[rgba(89,89,89,1)] rounded-xl bg-white">
                        <img
                          src={titleIcon}
                          alt="title icon"
                          className="w-5 h-5"
                        />
                        <input
                          type="text"
                          id="Title"
                          name="Title"
                          maxLength="100"
                          errordiv="errorTITLE"
                          onFocus={() => clearError("errorTITLE")}
                          placeholder="Title*"
                          className="w-full py-2 text-[16px] text-[#595959] placeholder:text-[#595959] bg-transparent focus:outline-none font-semibold"
                        />
                      </div>
                      <div className="zcwf_col_help"></div>
                      <p className="errorMessage pl-2 mt-2" id="errorTITLE">
                        error div
                      </p>
                    </div>
                    <div className="flex items-start justify-center flex-col w-full">
                      <div className="flex items-center justify-center gap-3 w-full border px-3 py-1.5 border-[rgba(89,89,89,1)] rounded-xl bg-white">
                        <img
                          src={emailIcon}
                          alt="email icon"
                          className="w-5 h-5"
                        />
                        <input
                          type="text"
                          ftype="email"
                          autoComplete="false"
                          id="Email"
                          name="Email"
                          crmlabel=""
                          maxLength={100}
                          errordiv="errorEMAIL"
                          onBlur={emailValidation}
                          onFocus={() => clearError("errorEMAIL")}
                          placeholder="Email*"
                          className="w-full py-2 text-[16px] text-[#595959] placeholder:text-[#595959] bg-transparent focus:outline-none font-semibold"
                        />
                      </div>
                      <div className="zcwf_col_help" />
                      <p className="errorMessage pl-2 mt-2" id="errorEMAIL">
                        error div
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 place-items-start gap-6">
                    <div className="flex items-center justify-center gap-3 w-full border px-3 py-1.5 border-[rgba(89,89,89,1)] rounded-xl bg-white">
                      <img
                        src={countryIcon}
                        alt="country location icon"
                        className="w-5 h-5"
                      />
                      <select
                        className="w-full py-2 text-[16px] text-[#595959] placeholder:text-[#595959] bg-transparent focus:outline-none font-semibold"
                        id="CONTACTCF2"
                        name="CONTACTCF2"
                      >
                        <option value="" disabled>
                          Country Code*
                        </option>
                        <option value="India (+91)">India (+91)</option>
                        <option value="Algeria (+213)">Algeria (+213)</option>
                        <option value="Andorra (+376)">Andorra (+376)</option>
                        <option value="Anguilla (+1264)">
                          Anguilla (+1264)
                        </option>
                        <option value="Antigua &amp; Barbuda (+1268)">
                          Antigua &amp; Barbuda (+1268)
                        </option>
                        <option value="Argentina (+54)">Argentina (+54)</option>
                        <option value="Armenia (+374)">Armenia (+374)</option>
                        <option value="Aruba (+297)">Aruba (+297)</option>
                        <option value="Australia (+61)">Australia (+61)</option>
                        <option value="Austria (+43)">Austria (+43)</option>
                        <option value="Azerbaijan (+994)">
                          Azerbaijan (+994)
                        </option>
                        <option value="Bahrain (+973)">Bahrain (+973)</option>
                        <option value="Bangladesh (+880)">
                          Bangladesh (+880)
                        </option>
                        <option value="Barbados (+1246)">
                          Barbados (+1246)
                        </option>
                        <option value="Belarus (+375)">Belarus (+375)</option>
                        <option value="Belgium (+32)">Belgium (+32)</option>
                        <option value="Belize (+501)">Belize (+501)</option>
                        <option value="Benin (+229)">Benin (+229)</option>
                        <option value="Bermuda (+1441)">Bermuda (+1441)</option>
                        <option value="Bhutan (+975)">Bhutan (+975)</option>
                        <option value="Bolivia (+591)">Bolivia (+591)</option>
                        <option value="Bosnia Herzegovina (+387)">
                          Bosnia Herzegovina (+387)
                        </option>
                        <option value="Botswana (+267)">Botswana (+267)</option>
                        <option value="Brazil (+55)">Brazil (+55)</option>
                        <option value="Brunei (+673)">Brunei (+673)</option>
                        <option value="Bulgaria (+359)">Bulgaria (+359)</option>
                        <option value="Burkina Faso (+226)">
                          Burkina Faso (+226)
                        </option>
                        <option value="Burundi (+257)">Burundi (+257)</option>
                        <option value="Cameroon (+237)">Cameroon (+237)</option>
                        <option value="Cambodia (+855)">Cambodia (+855)</option>
                        <option value="Canada (+1)">Canada (+1)</option>
                        <option value="Cape Verde Islands (+238)">
                          Cape Verde Islands (+238)
                        </option>
                        <option value="Cayman Islands (+1345)">
                          Cayman Islands (+1345)
                        </option>
                        <option value="Central African Republic (+236)">
                          Central African Republic (+236)
                        </option>
                        <option value="Chile (+56)">Chile (+56)</option>
                        <option value="China (+86)">China (+86)</option>
                        <option value="Colombia (+57)">Colombia (+57)</option>
                        <option value="Comoros (+269)">Comoros (+269)</option>
                        <option value="Congo (+242)">Congo (+242)</option>
                        <option value="Cook Islands (+682)">
                          Cook Islands (+682)
                        </option>
                        <option value="Costa Rica (+506)">
                          Costa Rica (+506)
                        </option>
                        <option value="Croatia (+385)">Croatia (+385)</option>
                        <option value="Cuba (+53)">Cuba (+53)</option>
                        <option value="Cyprus North (+90392)">
                          Cyprus North (+90392)
                        </option>
                        <option value="Cyprus South (+357)">
                          Cyprus South (+357)
                        </option>
                        <option value="Czech Republic (+42)">
                          Czech Republic (+42)
                        </option>
                        <option value="Denmark (+45)">Denmark (+45)</option>
                        <option value="Djibouti (+253)">Djibouti (+253)</option>
                        <option value="Dominica (+1809)">
                          Dominica (+1809)
                        </option>
                        <option value="Dominican Republic (+1809)">
                          Dominican Republic (+1809)
                        </option>
                        <option value="Ecuador (+593)">Ecuador (+593)</option>
                        <option value="Egypt (+20)">Egypt (+20)</option>
                        <option value="El Salvador (+503)">
                          El Salvador (+503)
                        </option>
                        <option value="Equatorial Guinea (+240)">
                          Equatorial Guinea (+240)
                        </option>
                        <option value="Eritrea (+291)">Eritrea (+291)</option>
                        <option value="Estonia (+372)">Estonia (+372)</option>
                        <option value="Ethiopia (+251)">Ethiopia (+251)</option>
                        <option value="Falkland Islands (+500)">
                          Falkland Islands (+500)
                        </option>
                        <option value="Faroe Islands (+298)">
                          Faroe Islands (+298)
                        </option>
                        <option value="Fiji (+679)">Fiji (+679)</option>
                        <option value="Finland (+358)">Finland (+358)</option>
                        <option value="France (+33)">France (+33)</option>
                        <option value="French Guiana (+594)">
                          French Guiana (+594)
                        </option>
                        <option value="French Polynesia (+689)">
                          French Polynesia (+689)
                        </option>
                        <option value="Gabon (+241)">Gabon (+241)</option>
                        <option value="Gambia (+220)">Gambia (+220)</option>
                        <option value="Georgia (+7880)">Georgia (+7880)</option>
                        <option value="Gibraltar (+350)">
                          Gibraltar (+350)
                        </option>
                        <option value="Germany (+49)">Germany (+49)</option>
                        <option value="Ghana (+233)">Ghana (+233)</option>
                        <option value="Greece (+30)">Greece (+30)</option>
                        <option value="Greenland (+299)">
                          Greenland (+299)
                        </option>
                        <option value="Grenada (+1473)">Grenada (+1473)</option>
                        <option value="Guadeloupe (+590)">
                          Guadeloupe (+590)
                        </option>
                        <option value="Guam (+671)">Guam (+671)</option>
                        <option value="Guatemala (+502)">
                          Guatemala (+502)
                        </option>
                        <option value="Guinea (+224)">Guinea (+224)</option>
                        <option value="Guinea - Bissau (+245)">
                          Guinea - Bissau (+245)
                        </option>
                        <option value="Guyana (+592)">Guyana (+592)</option>
                        <option value="Haiti (+509)">Haiti (+509)</option>
                        <option value="Honduras (+504)">Honduras (+504)</option>
                        <option value="Hong Kong (+852)">
                          Hong Kong (+852)
                        </option>
                        <option value="Hungary (+36)">Hungary (+36)</option>
                        <option value="Iceland (+354)">Iceland (+354)</option>
                        <option value="Indonesia (+62)">Indonesia (+62)</option>
                        <option value="Iran (+98)">Iran (+98)</option>
                        <option value="Iraq (+964)">Iraq (+964)</option>
                        <option value="Ireland (+353)">Ireland (+353)</option>
                        <option value="Israel (+972)">Israel (+972)</option>
                        <option value="Italy (+39)">Italy (+39)</option>
                        <option value="Jamaica (+1876)">Jamaica (+1876)</option>
                        <option value="Japan (+81)">Japan (+81)</option>
                        <option value="Jordan (+962)">Jordan (+962)</option>
                        <option value="Kazakhstan (+7)">Kazakhstan (+7)</option>
                        <option value="Kenya (+254)">Kenya (+254)</option>
                        <option value="Kiribati (+686)">Kiribati (+686)</option>
                        <option value="Korea North (+850)">
                          Korea North (+850)
                        </option>
                        <option value="Korea South (+82)">
                          Korea South (+82)
                        </option>
                        <option value="Kuwait (+965)">Kuwait (+965)</option>
                        <option value="Kyrgyzstan (+996)">
                          Kyrgyzstan (+996)
                        </option>
                        <option value="Laos (+856)">Laos (+856)</option>
                        <option value="Latvia (+371)">Latvia (+371)</option>
                        <option value="Lebanon (+961)">Lebanon (+961)</option>
                        <option value="Lesotho (+266)">Lesotho (+266)</option>
                        <option value="Liberia (+231)">Liberia (+231)</option>
                        <option value="Libya (+218)">Libya (+218)</option>
                        <option value="Lithuania (+370)">
                          Lithuania (+370)
                        </option>
                        <option value="Luxembourg (+352)">
                          Luxembourg (+352)
                        </option>
                        <option value="Macao (+853)">Macao (+853)</option>
                        <option value="Macedonia (+389)">
                          Macedonia (+389)
                        </option>
                        <option value="Madagascar (+261)">
                          Madagascar (+261)
                        </option>
                        <option value="Malawi (+265)">Malawi (+265)</option>
                        <option value="Malaysia (+60)">Malaysia (+60)</option>
                        <option value="Maldives (+960)">Maldives (+960)</option>
                        <option value="Mali (+223)">Mali (+223)</option>
                        <option value="Malta (+356)">Malta (+356)</option>
                        <option value="Marshall Islands (+692)">
                          Marshall Islands (+692)
                        </option>
                        <option value="Martinique (+596)">
                          Martinique (+596)
                        </option>
                        <option value="Mauritania (+222)">
                          Mauritania (+222)
                        </option>
                        <option value="Mayotte (+269)">Mayotte (+269)</option>
                        <option value="Mexico (+52)">Mexico (+52)</option>
                        <option value="Micronesia (+691)">
                          Micronesia (+691)
                        </option>
                        <option value="Moldova (+373)">Moldova (+373)</option>
                        <option value="Monaco (+377)">Monaco (+377)</option>
                        <option value="Mongolia (+976)">Mongolia (+976)</option>
                        <option value="Montserrat (+1664)">
                          Montserrat (+1664)
                        </option>
                        <option value="Morocco (+212)">Morocco (+212)</option>
                        <option value="Mozambique (+258)">
                          Mozambique (+258)
                        </option>
                        <option value="Myanmar (+95)">Myanmar (+95)</option>
                        <option value="Namibia (+264)">Namibia (+264)</option>
                        <option value="Nauru (+674)">Nauru (+674)</option>
                        <option value="Nepal (+977)">Nepal (+977)</option>
                        <option value="Netherlands (+31)">
                          Netherlands (+31)
                        </option>
                        <option value="New Caledonia (+687)">
                          New Caledonia (+687)
                        </option>
                        <option value="New Zealand (+64)">
                          New Zealand (+64)
                        </option>
                        <option value="Nicaragua (+505)">
                          Nicaragua (+505)
                        </option>
                        <option value="Niger (+227)">Niger (+227)</option>
                        <option value="Nigeria (+234)">Nigeria (+234)</option>
                        <option value="Niue (+683)">Niue (+683)</option>
                        <option value="Norfolk Islands (+672)">
                          Norfolk Islands (+672)
                        </option>
                        <option value="Northern Marianas (+670)">
                          Northern Marianas (+670)
                        </option>
                        <option value="Norway (+47)">Norway (+47)</option>
                        <option value="Oman (+968)">Oman (+968)</option>
                        <option value="Palau (+680)">Palau (+680)</option>
                        <option value="Pakistan (+92)">Pakistan (+92)</option>
                        <option value="Panama (+507)">Panama (+507)</option>
                        <option value="Papua New Guinea (+675)">
                          Papua New Guinea (+675)
                        </option>
                        <option value="Paraguay (+595)">Paraguay (+595)</option>
                        <option value="Peru (+51)">Peru (+51)</option>
                        <option value="Philippines (+63)">
                          Philippines (+63)
                        </option>
                        <option value="Poland (+48)">Poland (+48)</option>
                        <option value="Portugal (+351)">Portugal (+351)</option>
                        <option value="Puerto Rico (+1787)">
                          Puerto Rico (+1787)
                        </option>
                        <option value="Qatar (+974)">Qatar (+974)</option>
                        <option value="Reunion (+262)">Reunion (+262)</option>
                        <option value="Romania (+40)">Romania (+40)</option>
                        <option value="Russia (+7)">Russia (+7)</option>
                        <option value="Rwanda (+250)">Rwanda (+250)</option>
                        <option value="San Marino (+378)">
                          San Marino (+378)
                        </option>
                        <option value="Sao Tome &amp; Principe (+239)">
                          Sao Tome &amp; Principe (+239)
                        </option>
                        <option value="Saudi Arabia (+966)">
                          Saudi Arabia (+966)
                        </option>
                        <option value="Senegal (+221)">Senegal (+221)</option>
                        <option value="Serbia (+381)">Serbia (+381)</option>
                        <option value="Seychelles (+248)">
                          Seychelles (+248)
                        </option>
                        <option value="Sierra Leone (+232)">
                          Sierra Leone (+232)
                        </option>
                        <option value="Singapore (+65)">Singapore (+65)</option>
                        <option value="Slovak Republic (+421)">
                          Slovak Republic (+421)
                        </option>
                        <option value="Slovenia (+386)">Slovenia (+386)</option>
                        <option value="Solomon Islands (+677)">
                          Solomon Islands (+677)
                        </option>
                        <option value="Somalia (+252)">Somalia (+252)</option>
                        <option value="South Africa (+27)">
                          South Africa (+27)
                        </option>
                        <option value="Spain (+34)">Spain (+34)</option>
                        <option value="Sri Lanka (+94)">Sri Lanka (+94)</option>
                        <option value="St. Helena (+290)">
                          St. Helena (+290)
                        </option>
                        <option value="St. Kitts (+1869)">
                          St. Kitts (+1869)
                        </option>
                        <option value="St. Lucia (+1758)">
                          St. Lucia (+1758)
                        </option>
                        <option value="Sudan (+249)">Sudan (+249)</option>
                        <option value="Suriname (+597)">Suriname (+597)</option>
                        <option value="Swaziland (+268)">
                          Swaziland (+268)
                        </option>
                        <option value="Sweden (+46)">Sweden (+46)</option>
                        <option value="Switzerland (+41)">
                          Switzerland (+41)
                        </option>
                        <option value="Syria (+963)">Syria (+963)</option>
                        <option value="Taiwan (+886)">Taiwan (+886)</option>
                        <option value="Tajikstan (+7)">Tajikstan (+7)</option>
                        <option value="Thailand (+66)">Thailand (+66)</option>
                        <option value="Togo (+228)">Togo (+228)</option>
                        <option value="Tonga (+676)">Tonga (+676)</option>
                        <option value="Trinidad &amp; Tobago (+1868)">
                          Trinidad &amp; Tobago (+1868)
                        </option>
                        <option value="Tunisia (+216)">Tunisia (+216)</option>
                        <option value="Turkey (+90)">Turkey (+90)</option>
                        <option value="Turkmenistan (+7)">
                          Turkmenistan (+7)
                        </option>
                        <option value="Turkmenistan (+993)">
                          Turkmenistan (+993)
                        </option>
                        <option value="Turks &amp; Caicos Islands (+1649)">
                          Turks &amp; Caicos Islands (+1649)
                        </option>
                        <option value="Tuvalu (+688)">Tuvalu (+688)</option>
                        <option value="Uganda (+256)">Uganda (+256)</option>
                        <option value="UK (+44)">UK (+44)</option>
                        <option value="Ukraine (+380)">Ukraine (+380)</option>
                        <option value="United Arab Emirates (+971)">
                          United Arab Emirates (+971)
                        </option>
                        <option value="Uruguay (+598)">Uruguay (+598)</option>
                        <option value="USA (+1)">USA (+1)</option>
                        <option value="Uzbekistan (+7)">Uzbekistan (+7)</option>
                        <option value="Vanuatu (+678)">Vanuatu (+678)</option>
                        <option value="Vatican City (+379)">
                          Vatican City (+379)
                        </option>
                        <option value="Venezuela (+58)">Venezuela (+58)</option>
                        <option value="Vietnam (+84)">Vietnam (+84)</option>
                        <option value="Virgin Islands - British (+1284)">
                          Virgin Islands - British (+1284)
                        </option>
                        <option value="Virgin Islands - US (+1340)">
                          Virgin Islands - US (+1340)
                        </option>
                        <option value="Wallis &amp; Futuna (+681)">
                          Wallis &amp; Futuna (+681)
                        </option>
                        <option value="Yemen (North)(+969)">
                          Yemen (North)(+969)
                        </option>
                        <option value="Yemen (South)(+967)">
                          Yemen (South)(+967)
                        </option>
                        <option value="Zambia (+260)">Zambia (+260)</option>
                        <option value="Zimbabwe (+263)">Zimbabwe (+263)</option>
                      </select>
                      <div className="zcwf_col_help" />
                    </div>
                    <div className="flex items-start justify-center flex-col w-full">
                      <div className="flex items-center justify-center gap-3 w-full border px-3 py-1.5 border-[rgba(89,89,89,1)] rounded-xl bg-white">
                        <img
                          src={phoneIcon}
                          alt="person icon"
                          className="w-5 h-5"
                        />
                        <input
                          type="text"
                          id="Phone"
                          name="Phone"
                          maxLength={50}
                          errordiv="errorMOBILE"
                          onBlur={phoneValidation}
                          onFocus={() => clearError("errorMOBILE")}
                          placeholder="Phone*"
                          className="w-full py-2 text-[16px] text-[#595959] placeholder:text-[#595959] bg-transparent focus:outline-none font-semibold"
                        />
                      </div>
                      <div className="zcwf_col_help" />
                      <p className="errorMessage pl-2 mt-2" id="errorMOBILE">
                        error div
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start justify-center flex-col w-full">
                    <div className="flex items-start justify-center gap-3 w-full border px-3 py-1.5 border-[rgba(89,89,89,1)] rounded-xl bg-white">
                      <img
                        src={descriptionIcon}
                        alt="description icon"
                        className="w-5 h-5 mt-3"
                      />
                      <textarea
                        id="Description"
                        name="Description"
                        defaultValue={""}
                        errordiv="errorDESC"
                        onFocus={() => clearError("errorDESC")}
                        placeholder="Description"
                        className="w-full py-2 text-[16px] text-[#595959] placeholder:text-[#595959] bg-transparent focus:outline-none font-semibold"
                      />
                    </div>
                    <div className="zcwf_col_help" />
                    <p className="errorMessage" id="errorDESC">
                      error div
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center lg:flex-row flex-col gap-2 space-x-4 w-full">
                      <div className="flex flex-col w-full lg:w-[60%]">
                        <div className="flex items-center justify-center gap-3 border px-3 py-1.5 border-[rgba(89,89,89,1)] rounded-xl flex-grow bg-white">
                          <img
                            src={captchaIcon}
                            alt="captcha icon"
                            className="w-5 h-5"
                          />
                          <input
                            type="text"
                            maxLength={10}
                            name="enterdigest"
                            id="captch_input"
                            errordiv="errorCaptcha"
                            onFocus={() => clearError("errorCaptcha")}
                            placeholder="Enter Captcha*"
                            className="w-full py-2 text-[16px] text-[#595959] placeholder:text-[#595959] bg-transparent focus:outline-none font-semibold"
                          />
                        </div>
                        <div className="zcwf_col_help" />
                        <p className="errorMessage pl-2 mt-2" id="errorCaptcha">
                          error div
                        </p>
                      </div>
                      {/* Do not remove this code. */}
                      <div>
                        <div className="flex mb-1">
                          <div className="flex justify-center items-center gap-4">
                            <img
                              alt="dfsdfsd"
                              id="imgid1832254000001456002"
                              src="https://crm.zoho.com/crm/CaptchaServlet?formId=2c9b6516916ff1bc3f0724e46ac40081695d1f5f9351582b480dc9fb7aad8acddc48f3ba8494407fee4ce9a8237481af&grpid=f7b3c0e0b47b03d6e8e36721448f062fcc1e5e9b90b19af02de72d76fddcf570"
                            />

                            <img
                              src={refreshIcon}
                              className="cursor-pointer w-8 h-8"
                              onClick={reloadImg1832254000001456002}
                            />
                          </div>
                          <div className="" />
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-start items-center">
                      <div className="zcwf_privacy">
                        <div className="flex gap-3">
                          <div className="displayPurpose f13">
                            <label className="newCustomchkbox-md dIB w100per">
                              <input
                                autoComplete="off"
                                id="privacyTool1832254000001456002"
                                type="checkbox"
                                name="privacyTool"
                                onClick={disableErr1832254000001456002}
                              />
                            </label>
                          </div>
                          <div className="dIB zcwf_privacy_txt">
                            I have read the{" "}
                            <a
                              href="https://metapercept.com/privacy-policy/ "
                              title="https://metapercept.com/privacy-policy/ "
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline"
                            >
                              Privacy Policy
                            </a>{" "}
                            and I accept the {""}
                            <a
                              href="https://metapercept.com/termsandconditions/ "
                              title="https://metapercept.com/termsandconditions/ "
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline"
                            >
                              {" "}
                              terms and conditions
                            </a>
                            .
                          </div>
                        </div>
                        <div
                          id="privacyErr1832254000001456002"
                          style={{
                            fontSize: 12,
                            color: "red",
                            paddingLeft: 5,
                            visibility: "hidden",
                          }}
                        >
                          Please accept this
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4 w-full">
                    <button
                      type="submit"
                      id="formsubmit"
                      className="px-6 py-3 bg-gradient-to-r from-[#FFAC01] to-[#5ECB38] text-white text-lg font-semibold rounded-xl hover:bg-opacity-90 transition-colors w-full cursor-pointer"
                      title="Submit"
                    >
                      Submit
                    </button>
                    <button
                      type="reset"
                      className="px-6 py-3 bg-gradient-to-r from-[#FFAC01] to-[#5ECB38] text-white text-lg font-semibold rounded-xl hover:bg-opacity-90 transition-colors w-full cursor-pointer"
                      name="reset"
                      title="Reset"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </form>

              {/* Do not remove this code. */}
              <iframe
                name="captchaFrame"
                title="Captcha verification frame"
                style={{ display: "none" }}
              />
            </div>

            {/* Contact Info Section */}
            <div className="w-full flex justify-center items-center flex-col gap-4 md:w-[80%] lg:w-[30%] lg:pl-4 rounded-[24px]">
              <div className="bg-gray-50 rounded-xl p-6 shadow-md flex justify-center flex-col items-center w-full">
                <img
                  src={phoneIcon}
                  alt="person icon"
                  className="w-10 h-10 mb-5"
                />
                <div className="flex justify-center items-start flex-col space-y-4 text-black">
                  <span>Line 1 : +91 - 839-090-5726</span>
                  <span>Line 2 : +91 - 839-090-5726</span>
                  <span>Training : +91 - 986-080-0135</span>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 shadow-md flex justify-center flex-col items-center w-full">
                <img
                  src={emailIcon}
                  alt="person icon"
                  className="w-10 h-10 mb-5"
                />
                <div className="flex justify-center items-start flex-col space-y-4 text-black">
                  <span>Sales: sales@metapercept.com</span>
                  <span>Info: info@metapercept.com</span>
                  <span>Training: training@metapercept.com</span>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 shadow-md flex justify-center flex-col items-center w-full">
                <img
                  src={locationIcon}
                  alt="person icon"
                  className="w-10 h-10 mb-5"
                />
                <div className="flex justify-center items-start flex-col space-y-4 text-black">
                  <p>
                    <span className="text-textHover font-medium">India:</span>{" "}
                    Office Number 603, Konark Icon Magarpatta Road, Pune,
                    Maharashtra, India
                  </p>
                  <p>
                    <span className="text-textHover font-medium">USA:</span>{" "}
                    Arlington, Texas, USA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
