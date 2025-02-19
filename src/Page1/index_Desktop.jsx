import React, {useState, useRef} from "react";
import TextField from '@mui/material/TextField';
import "./index_Desktop.css";
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
        <div className="main-container">
            {(showModal || showThanks) && (
                <div
                    style={{
                        // 全屏遮罩层
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '5000px',
                        backgroundColor: 'rgba(128, 128, 128, 0.8)', // 半透明灰色
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 999,
                    }}
                >
                    <div
                        style={{
                            width: '1090px',
                            height: '600px',
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
                        {showModal &&(<p className="getintouch">Get in touch</p>)}
                        <img
                            src={exitImg}
                            alt="关闭弹窗"
                            onClick={closeAll}
                            style={{
                                cursor: "pointer",
                                width: "50px",
                                height: "50px",
                                position: "absolute",
                                top: "40px",    // 根据需要调整
                                right: "40px"   // 根据需要调整
                            }}
                        />
                        {showModal &&
                            (<form ref={formRef} style={{position: 'relative'}}>
                                <TextField
                                    style={{
                                        position: 'absolute',
                                        top: '145px',
                                        left: '10%',
                                    }}
                                    sx={{width: '400px'}}
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
                                        top: '145px',
                                        left: '55%',  // 适当调整与第一个输入框不重叠
                                    }}
                                    sx={{width: '400px'}}
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
                                        top: '220px',
                                        left: '10%',
                                    }}
                                    sx={{width: '400px'}}
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
                                        top: '220px',
                                        left: '55%',
                                    }}
                                    sx={{width: '400px'}}
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
                                        top: '295px',
                                        left: '10%',
                                    }}
                                    sx={{width: '850px'}}
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
                                    top: '400px',
                                    left: '10%',
                                    width: "190px",
                                    height: "41px",
                                    background: "#111bd2",
                                    cursor: 'pointer'
                                }}
                                    // onClick 即可发送邮件
                                     onClick={sendEmail}
                                >
                                    <span className="sendenquiry"
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
                                        top: '25%',
                                        transform: 'translate(-50%, -50%)',
                                        fontFamily: 'Roboto, var(--default-font-family)',
                                        fontSize: '36px',
                                        fontWeight: '300',
                                        lineHeight: '42px',
                                        whiteSpace: 'nowrap',
                                    }}>
                                        Thank You For Telling Us Your Story!
                                    </p>
                                    <span style={{
                                        position: 'absolute',
                                        display: 'flex',
                                        alignItems: 'center',
                                        left: '50%',
                                        top: '40%',
                                        transform: 'translate(-50%, -50%)',
                                        fontFamily: 'Roboto, var(--default-font-family)',
                                        fontSize: '36px',
                                        fontWeight: '300',
                                        lineHeight: '42px',

                                    }}>
                                        We Will Get Back To You Shortly!
                                    </span>
                                    <span style={{
                                        position: 'absolute',
                                        display: 'flex',
                                        alignItems: 'center',
                                        left: '50%',
                                        top: '60%',
                                        transform: 'translate(-50%, -50%)',
                                        fontFamily: 'Roboto, var(--default-font-family)',
                                        fontSize: '36px',
                                        fontWeight: '600',
                                        lineHeight: '42px',
                                        color: '#111BD2',
                                    }}>
                                    Sparkvise Team
                                    </span>
                                </div>
                            )

                        }
                    </div>
                </div>
            )}

            <div className="flex-row-dba">
                <div className="sparkvise"/>
                <div className="rectangle" onClick={openModal}>
                    <span className="start-a-project">START A PROJECT</span>
                </div>
            </div>

            {/* 以下保留你原有的其他内容不变 */}
            <span className="where-ideas-spark">
        Where Ideas Spark, Solutions Emerge!
      </span>
            <div className="flex-row-ee">
                <div className="ellipse"/>
                <div className="rectangle-1">
          <span className="customer-satisfaction">
            customer satisfaction because your success is our priority
          </span>
                </div>
                <div className="rectangle-2">
          <span className="you-deserve-expertise">
            You Deserve Expertise Across All Levels Of Business!
          </span>
                </div>
                <div className="rectangle-3">
                    <div className="s"/>
                    <span className="percentage">90%</span>
                    <span className="improved-efficiency">
            of our clients see improved efficiency within the first 3 months
          </span>
                </div>
                <div className="percentage-4">
                    <span className="text-7">100</span>
                    <span className="percentage-5">%</span>
                </div>
            </div>
            <span className="about-us">//About us</span>
            <div className="amazing-customer-service">
        <span className="digital-agency-chicago">
          Sparkvise is a full-service, digital agency based in Chicago,
          specializing in{" "}
        </span>
                <span className="web-design">web design</span>
                <span className="digital-agency-chicago-6">, </span>
                <span className="web-design-7">development</span>
                <span className="digital-agency-chicago-8">, </span>
                <span className="web-design-9">branding</span>
                <span className="digital-agency-chicago-a"> and </span>
                <span className="web-design-b">marketing</span>
                <span className="elevate-brand-experience">
          , helping businesses elevate their brand and customer experience.
        </span>
            </div>
            <div className="flex-row">
        <span className="our-partners">
          //Our partners
          <br/>
        </span>
                <div className="amazing-customer-service-c">
                    <span className="create-impactful">We create impactful </span>
                    <span className="digital-experiences">digital experiences</span>
                    <span className="create-impactful-d"> for</span>
                    <span className="digital-experiences-e"> leading organizations</span>
                    <span className="across-industries"> across industries.</span>
                </div>
            </div>
            <div className="flex-row-b">
        <span className="amazing-customer-service-f">
          //What our clients say
          <br/>
          <br/>
        </span>
                <div className="amazing-customer-service-10">
                    <span className="partnering-with-sparkvise">“Partnering with </span>
                    <span className="sparkvise-11">Sparkvise</span>
                    <span className="partnering-with-sparkvise-12">
            {" "}
                        has been a game-changer for our operations. Since implementing their
            solution, we've seen a 40% reduction in operational costs and a 60%
            improvement in call resolution rates. I highly recommend{" "}
          </span>
                    <span className="sparkvise-13">Sparkvise</span>
                    <span className="expertise-commitment-innovation">
            {" "}
                        as their expertise and commitment to innovation have made them an
            indispensable partner in our success.”
          </span>
                </div>
            </div>
            <div className="flex-row-d">
                <div className="frame"/>
                <div className="scott-slawson">
          <span className="anas">
            Anas
            <br/>
          </span>
                    <span className="operating-director-eating-in-delivery">
            Operating Director, Eating In Delivery
          </span>
                </div>
            </div>
            <div className="rectangle-14">
                <span className="amazing-customer-service-15">//Let’s talk</span>
                <span className="amazing-customer-service-16">
          Get in touch, and let’s get to work.
        </span>
                <div className="rectangle-17" onClick={openModal}>
                    <span className="start-a-project-18">START A PROJECT</span>
                </div>
            </div>
            <div className="flex-row-dcb">
                <div className="rectangle-19"/>
                <span className="sparkvise-1a">
          Sparkvise
          <br/>
        </span>
            </div>
            <div className="mask-group"/>
            <div className="flex-row-a">
                <div className="straight-line"/>
                <div className="straight-line-1b"/>
                <div className="rectangle-1c">
                    <span className="amazing-customer-service-1d">//What we do</span>
                    <div className="amazing-customer-service-1e">
                        <span className="at-sparkvise">At </span>
                        <span className="sparkvise-1f">Sparkvise</span>
                        <span className="dedicated-to-transforming">
              , we are dedicated to transforming businesses through cutting-edge
              technology solutions. Founded on innovation, expertise, and a
              passion for problem-solving, our team of experienced developers,
              designers, and strategists work collaboratively to deliver
              scalable and customized IT solutions that drive efficiency,
              growth, and success.
            </span>
                    </div>
                </div>
                <div className="rectangle-20">
                    <div className="ellipse-21"/>
                    <div className="group"/>
                </div>
                <div className="rectangle-22">
                    <div className="ellipse-23"/>
                    <div className="group-24"/>
                </div>
                <div className="rectangle-25">
                    <div className="ellipse-26"/>
                    <div className="frame-27"/>
                </div>
                <div className="rectangle-28">
                    <span className="initial-review">Website</span>
                    <span className="comprehensive-website-design">
            Comprehensive and customized website design & development solutions
            for YOUR business!
          </span>
                </div>
                <div className="rectangle-29">
                    <span className="initial-review-2a">Mobile App</span>
                    <span className="custom-mobile-apps">
            We efficiently engineer custom iOS and Android apps, tailored to
            your business needs at an affordable rate.
          </span>
                </div>
                <div className="rectangle-2b">
          <span className="customer-experience-outsourcing">
            Customer Experience  Outsourcing
            <br/>
          </span>
                    <span className="customer-experience-solutions">
            Save your valuable time and scale your business confidently with our
            customer experience outsourcing solutions!
          </span>
                </div>
            </div>
            <div className="rectangle-2c"/>
            <div className="mask-group-2d"/>
        </div>
    );
}