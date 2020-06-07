import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import SendIcon from '@material-ui/icons/Send';
import MessageIcon from '@material-ui/icons/Message';


export default function QuoteSection () {
    
    return (
        <div className="home-quote-section-flex">
            <div className="home-quote-section-item">
                <div className="quote-header-cover">
                    <div className="quote-title-header-cover">
                        {/* <h2 className="quote-header-title">Tell Us What You Need</h2> */}
                    </div>
                </div>
                <div className="quote-content-cover">
                    <div className="quote-text-form-cover-flex">
                        <div className="quote-text-form-cover-item">
                            <div className="quote-text-header-cover">
                                <h2 className="quote-title-text">Tell Us What You Need</h2>
                            </div>
                            <div className="quote-text-subheader-cover">
                                <p className="quote-subtitle-text">Send us details of what you want, and we'll send you a quote of what to expect.</p>
                            </div>
                        </div>
                        <div className="quote-text-form-cover-item">
                            <div className="quote-form-cover-flex">
                                <div className="quote-form-cover-item">
                                    <form className="quote-form" id="quote_form" action="" method="">
                                        <div className="quote-form-input-cover">
                                            {/* <div className="input-title-cover">
                                                <h2 className="input-title">Get a price quote.</h2>
                                            </div> */}
                                            <TextField type="text" className="quote-form-input" name="fullnames" id="fullname_input" placeholder="Full Names" 
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <PersonIcon className="input-adorn-icon" />
                                                        </InputAdornment>
                                                    )
                                                }}
                                            fullWidth required />
                                        </div>
                                        <div className="quote-form-input-cover">
                                            <TextField type="email" className="quote-form-input" name="email" id="email_input" placeholder="Email"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <EmailIcon className="input-adorn-icon" />
                                                        </InputAdornment>
                                                    )
                                                }}
                                            fullWidth required />
                                        </div>
                                        <div className="quote-form-input-cover">
                                            <TextField type="number" className="quote-form-input" name="phoneno" id="phoneno_input" placeholder="Phone No" 
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <PhoneIcon className="input-adorn-icon" />
                                                        </InputAdornment>
                                                    )
                                                }}
                                            fullWidth required />
                                        </div>
                                        <div className="quote-form-input-cover">
                                            <TextField type="text" className="quote-form-input-text" name="message" id="message_input" multiline placeholder="Tell Us What You Need" fullWidth required 
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <MessageIcon className="input-adorn-icon" />
                                                        </InputAdornment>
                                                    )
                                                }} />
                                        </div>
                                        <div className="quote-form-button-cover">
                                            <Button type="button" className="quote-form-btn" id="quote_form_btn" color="primary" variant="contained">Submit &nbsp;&nbsp; <SendIcon /></Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}