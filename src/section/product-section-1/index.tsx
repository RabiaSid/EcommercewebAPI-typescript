import { HomeBanner1 } from '../../assets'
import { useNavigate } from 'react-router'
import color from '../../constant'

export default function SectionOneProduct() {
    const navigate = useNavigate()
    return (
        <>
            <div id="home" className="d-flex justify-content-evenly py-5 m-0 p-0" style={{background:'transparent'}} >
                <div className="row m-0 px-2 d-flex justify-content-center col-lg-11" >

                    <div className="col-12 col-lg-5 d-flex  pt-5 mt-5 " >
                        <div className=" row py-lg-0 py-2" >
                            <h1 className="home-section-1-heading-1 text_card7" >
                            Come Up with
                                <h1 className="home-section-1-heading-2 text_card7" >
                                Happiness
                                </h1>
                                <h5 className="home-section-1-top-text text_card8" >
                                Forget the old rules. You can have the best people.
Right now. Right here.
                                </h5>
                            </h1>
                            <div>
                                <div onClick={() => navigate('/signup-as')}>
                                    {/* <GradientButton
                                        title="Get Started"
                                        color={color.white}
                                        backgroundColor1={color.primaryColor}
                                        backgroundColor2={color.secondaryColor}

                                    /> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-7 d-none d-lg-block" >
                            <img src={HomeBanner1} alt="" style={{height:'70vh',}}/>
                    </div>


                </div>
            </div>
        </>
    )
}
