import {useState, useRef} from "react";
import TextField from '@mui/material/TextField';
import "./index_Mobile.css";
import exitImg from '../assets/exit.png';

import emailjs from '@emailjs/browser';


export default function Main() {
    const [showThanks, setShowThanks] = useState(false);
    const [showModal, setShowModal] = useState(false);


    // 2. 建立一个引用，用于关联表单
    const formRef = useRef(null);

    // 打开弹窗
    const openModal = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"   // 平滑滚动，也可用 "auto"
        });
        console.log("openModal");
        setShowModal(true);
    };

    // 关闭弹窗
    const closeAll = () => {
        console.log("closeAll");
        setShowModal(false);
        setShowThanks(false);
    };

    // 3. 发送邮件的函数
    const sendEmail = (e) => {

        const firstName = formRef.current["user_first_name"].value;
        const lastName = formRef.current["user_last_name"].value;

        e.preventDefault();
        if (!firstName.trim() || !lastName.trim()) {
            alert("First name or Last name cannot be empty ");
            return; // 直接 return，阻止继续发送
        }

        emailjs.sendForm(
            'service_dceugs9',
            'template_vjroeku',
            formRef.current,
            'cgPLaRRCCpTc06CpD'
        )
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    // 如果发送成功，可以选择这里就关闭弹窗，或给出提示信息
                    setShowModal(false);
                    setShowThanks(true);
                },
                (error) => {
                    alert('please contact michaelxunanzhang@gmail.com directly. ERROR: ', error.message);
                    console.log('FAILED...', error.text);
                }
            );
    };


  return (
    <div className="main-container-Page2">

        {(showModal || showThanks) && (
            <div
                style={{
                    // 全屏遮罩层
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '1000px',
                    backgroundColor: 'rgba(128, 128, 128, 0.8)', // 半透明灰色
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 999,
                }}
            >
                <div
                    style={{
                        width: '272px',
                        height: '560px',
                        backgroundColor: '#fff',
                        padding: '20px',
                        boxSizing: 'border-box',
                        position: 'fixed',   // 使用固定定位
                        top: '0%',          // 顶部位置可根据需要做进一步调整
                        left: '50%',
                        transform: 'translate(-50%, 10%)',
                        zIndex: 1000,       // 确保弹窗在最上层
                    }}
                >
                    {showModal &&(<p
                    style={{
                        position: 'absolute',
                        marginTop: '0px',
                        top: "0px",    // 根据需要调整
                        left: "10px",   // 根据需要调整
                        fontSize: '35px',
                        fontWeight: '400',
                        lineHeight: '75px',
                        textAlign: 'left',
                        fontFamily: 'Roboto',
                    }}>Get in touch</p>)}
                    <img
                        src={exitImg}
                        alt="关闭弹窗"
                        onClick={closeAll}
                        style={{
                            cursor: "pointer",
                            width: "40px",
                            height: "40px",
                            position: "absolute",
                            top: "18px",    // 根据需要调整
                            right: "10px"   // 根据需要调整
                        }}
                    />
                    {showModal &&
                        (<form ref={formRef} style={{position: 'relative'}}>
                            <TextField
                                style={{
                                    position: 'absolute',
                                    top: '50px',
                                    left: '0px',
                                }}

                                InputProps={{
                                    style: {
                                        fontSize: '1.2rem',
                                        padding: '0px 0px',
                                        height: '60px'
                                    }
                                }}
                                required
                                id="standard-required"
                                label="First Name"
                                variant="standard"
                                name="user_first_name"   // 加上 name 属性
                            />

                            <TextField
                                style={{
                                    position: 'absolute',
                                    top: '125px',
                                    left: '0px',
                                }}

                                InputProps={{
                                    style: {
                                        fontSize: '1.2rem',
                                        padding: '0px 0px',
                                        height: '60px'
                                    }
                                }}
                                required
                                id="standard-required"
                                label="Last Name"
                                variant="standard"
                                name="user_last_name"    // 加上 name 属性
                            />

                            <TextField
                                style={{
                                    position: 'absolute',
                                    top: '200px',
                                    left: '0px',
                                }}

                                InputProps={{
                                    style: {
                                        fontSize: '1.2rem',
                                        padding: '0px 0px',
                                        height: '60px'
                                    }
                                }}

                                id="standard-basic"
                                label="Phone"
                                variant="standard"
                                name="user_phone"        // 加上 name 属性
                            />

                            <TextField
                                style={{
                                    position: 'absolute',
                                    top: '275px',
                                    left: '0px',
                                }}

                                InputProps={{
                                    style: {
                                        fontSize: '1.2rem',
                                        padding: '0px 0px',
                                        height: '60px'
                                    }
                                }}
                                id="standard-basic"
                                label="Email"
                                variant="standard"
                                name="user_email"        // 加上 name 属性
                            />

                            <TextField
                                style={{
                                    position: 'absolute',
                                    top: '350px',
                                    left: '0px',
                                }}
                                InputProps={{
                                    style: {
                                        fontSize: '1.2rem',
                                        padding: '0px 0px',
                                        height: '60px'
                                    }
                                }}
                                id="standard-basic"
                                label="Message"
                                variant="standard"
                                name="message"           // 加上 name 属性
                            />

                            <div style={{
                                position: "absolute",
                                top: '475px',
                                left: '0%',
                                width: "190px",
                                height: "41px",
                                background: "#111bd2",
                                cursor: 'pointer'
                            }}
                                // onClick 即可发送邮件
                                 onClick={sendEmail}
                            >
                                    <span className="sendenquiry-Page2"
                                          style={{
                                              display: 'inline-block',
                                              textAlign: 'center',
                                              color: '#fff',
                                              lineHeight: '41px',
                                          }}
                                    >
                                      SEND ENQUIRY
                                    </span>
                            </div>
                        </form>)
                    }
                    {showThanks &&
                        (
                            <div>
                                <p style={{
                                    position: 'absolute',
                                    display: 'flex',
                                    alignItems: 'center',
                                    left: '50%',
                                    top: '18%',
                                    transform: 'translate(-50%, -50%)',
                                    fontFamily: 'Roboto, var(--default-font-family)',
                                    fontSize: '25px',
                                    fontWeight: '300',
                                    lineHeight: '42px',
                                    whiteSpace: 'nowrap',
                                }}>
                                    Thank You For Telling
                                </p>
                                <p style={{
                                    position: 'absolute',
                                    display: 'flex',
                                    alignItems: 'center',
                                    left: '50%',
                                    top: '25%',
                                    transform: 'translate(-50%, -50%)',
                                    fontFamily: 'Roboto, var(--default-font-family)',
                                    fontSize: '25px',
                                    fontWeight: '300',
                                    lineHeight: '42px',
                                    whiteSpace: 'nowrap',
                                }}>
                                    Us Your Story!
                                </p>

                                <span style={{
                                    position: 'absolute',
                                    display: 'flex',
                                    alignItems: 'center',
                                    left: '50%',
                                    top: '37%',
                                    transform: 'translate(-50%, -50%)',
                                    fontFamily: 'Roboto, var(--default-font-family)',
                                    fontSize: '25px',
                                    fontWeight: '300',
                                    lineHeight: '42px',
                                    whiteSpace: 'nowrap',


                                }}>
                                        We Will Get Back To
                                </span>
                                <span style={{
                                    position: 'absolute',
                                    display: 'flex',
                                    alignItems: 'center',
                                    left: '50%',
                                    top: '44%',
                                    transform: 'translate(-50%, -50%)',
                                    fontFamily: 'Roboto, var(--default-font-family)',
                                    fontSize: '25px',
                                    fontWeight: '300',
                                    lineHeight: '42px',
                                    whiteSpace: 'nowrap',


                                }}>
                                         You Shortly!
                                </span>

                                <span style={{
                                    position: 'absolute',
                                    display: 'flex',
                                    alignItems: 'center',
                                    left: '50%',
                                    top: '60%',
                                    transform: 'translate(-50%, -50%)',
                                    fontFamily: 'Roboto, var(--default-font-family)',
                                    fontSize: '30px',
                                    fontWeight: '600',
                                    lineHeight: '42px',
                                    color: '#111BD2',
                                    whiteSpace: 'nowrap',

                                }}>
                                    Sparkvise Team
                                </span>
                            </div>
                        )

                    }
                </div>
            </div>
        )}

      <div className="rectangle-11-Page2">
        <span className="cut-costs-Page2">
          customer satisfaction <br/> because your success is our priority
        </span>
      </div>

      <div className="percent-Page2">
        <span className="text-15-Page2">100</span>
        <span className="percent-12-Page2">%</span>
      </div>

      <span className="we-save-you-company-Page2">
        Where Ideas Spark, <br/>Solutions Emerge!
      </span>


      <div className="rectangle-Page2">
        <span className="you-deserve-expertise-Page2">
          You Deserve Expertise Across All Levels Of Business!
        </span>
      </div>

      <div className="rectangle-1-Page2" >
          <div className="s-Page2" />
          <span className="ninety-percent-Page2">90%</span>
          <span className="improved-efficiency-Page2">
          of our clients see improved efficiency within the first 3 months
        </span>
      </div>


      <span className="amazing-customer-service-Page2">//About us</span>
      <div className="amazing-customer-service-2-Page2" style={{ fontSize: '24px' }}>
        <span className="full-service-digital-agency-Page2">
          Sparkvise is a full-service, digital agency based in Chicago,
          specializing in{" "}
        </span>
        <span className="web-design-Page2">web design</span>
        <span className="full-service-digital-agency-3-Page2">, </span>
        <span className="web-design-4-Page2">development</span>
        <span className="full-service-digital-agency-5-Page2">, </span>
        <span className="web-design-6-Page2">branding</span>
        <span className="full-service-digital-agency-7-Page2"> and </span>
        <span className="web-design-8-Page2">marketing</span>
        <span className="full-service-digital-agency-9-Page2">
          , helping businesses elevate their brand and customer experience.
        </span>
      </div>





      <div className="ellipse-Page2" />
      <div className="rectangle-13-Page2" />
      <div className="rectangle-14-Page2">
        <span className="amazing-customer-service-15-Page2">//What we do</span>
        <div className="amazing-customer-service-16-Page2" style={{ fontSize: '24px' }}>
          <span className="at-Page2">At </span>
          <span className="sparkvise-17-Page2">Sparkvise</span>
          <span className="at-18-Page2">
            , we are dedicated to transforming businesses through cutting-edge
            technology solutions. Founded on innovation, expertise, and a
            passion for problem-solving, our team of experienced developers,
            designers, and strategists work collaboratively to deliver scalable
            and customized IT solutions that drive efficiency, growth, and
              success. </span>

        </div>
      </div>
      <div className="line-Page2" />
      <div className="rectangle-19-Page2">
        <div className="ellipse-1a-Page2" />
        <div className="group-Page2" />
      </div>
      <div className="rectangle-1b-Page2">
        <span className="initial-review-Page2">Website</span>
        <span className="comprehensive-website-design-Page2">
          Comprehensive and customized website design & development solutions
          for YOUR business!
        </span>
      </div>
      <div className="rectangle-1c-Page2">
        <div className="ellipse-1d-Page2" />
        <div className="group-1e-Page2" />
      </div>
      <div className="rectangle-1f-Page2">
        <span className="initial-review-20-Page2">Mobile App</span>
        <span className="custom-ios-android-apps-Page2">
          We efficiently engineer custom iOS and Android apps, tailored to your
          business needs at an affordable rate.
        </span>
      </div>
      <div className="rectangle-21-Page2">
        <div className="ellipse-22-Page2" />
        <div className="vector-Page2">
          <div className="vector-23-Page2" />
        </div>
      </div>
      <div className="rectangle-24-Page2">
        <span className="customer-experience-outsourcing-Page2">
          Customer Experience  Outsourcing
          <br />
        </span>
        <span className="customer-experience-outsourcing-solutions-Page2">
          Save your valuable time and scale your business confidently with our
          customer experience outsourcing solutions!
        </span>
      </div>
      <span className="amazing-customer-service-25-Page2">
        //Our partners
        <br />
      </span>
      <div className="amazing-customer-service-26-Page2">
        <span className="across-industries-Page2">We create impactful </span>
        <span className="leading-organizations-Page2">digital experiences</span>
        <span className="across-industries-27-Page2"> for</span>
        <span className="leading-organizations-28-Page2"> leading organizations</span>
        <span className="across-industries-29-Page2"> across industries.</span>
      </div>
      <div className="mask-group-2a-Page2" />
      <span className="amazing-customer-service-2b-Page2">
        //What our clients say
        <br />
        <br />
      </span>
      <div className="amazing-customer-service-2c-Page2">
        <span className="partnering-with-sparkvise-Page2">“Partnering with </span>
        <span className="sparkvise-2d-Page2">Sparkvise</span>
        <span className="partnering-with-sparkvise-2e-Page2">
          {" "}
          has been a game-changer for our operations. Since implementing their
          solution, we've seen a 40% reduction in operational costs and a 60%
          improvement in call resolution rates. I highly recommend{" "}
        </span>
        <span className="sparkvise-2f-Page2">Sparkvise</span>
        <span className="expertise-innovation-partner-Page2">
          {" "}
          as their expertise and commitment to innovation have made them an
          indispensable partner in our success.”
        </span>
      </div>
      <div className="scott-slawson-Page2">
        <span className="anas-Page2">
          Anas
          <br />
        </span>
        <span className="operating-director-eating-in-delivery-Page2">
          Operating Director, Eating In Delivery
        </span>
      </div>

        <div className="rectangle-a-Page2">
            <span className="amazing-customer-service-b-Page2">//Let’s talk</span>
            <span className="get-in-touch-Page2">
                Get in touch, and let’s get to work.
            </span>
            <div className="rectangle-c-Page2" onClick={openModal}>
                <span className="start-project-Page2">START A PROJECT</span>
            </div>
        </div>

        <div className="rectangle-d-Page2">
        <span className="sparkvise-Page2">
          Sparkvise
          <br />
        </span>
        </div>
        <div className="mask-group-Page2" />
        <div className="rectangle-e-Page2">
            <span className="start-project-f-Page2" onClick={openModal} >START A PROJECT</span>
        </div>
        <div className="sparkvise-10-Page2" />
      <div className="group-30-Page2" />
    </div>
  );
}
