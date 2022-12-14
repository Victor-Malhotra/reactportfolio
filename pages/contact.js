export default function contact() {
  return (
    <div className="content-center">

          <div className="py-10 lg:py-16 px-4 max-w-screen-sm content-center">
      <form action="https://formsubmit.co/e37bce064f7e1870a53a7dca208f2560 " method="POST" enctype="multipart/form-data" className="space-y-8 content-center">
                  <div className="form-row content-center">
                            <div className="form-group col-md-6">
                                <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" id="name" name="name" placeholder="Full Name *" required/>
            </div>
            <br />
                            <div className="form-group col-md-6">
                                <input type="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" id="email" name="email" placeholder="Email Address *" required/>
                            </div>
<br />
                            <div className="form-group col-md-6">
                                <input type="tel" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" id="phone" name="phone" placeholder="Phone Number *" required/>
            </div>
            <br />
                            <div className="form-group col-md-6">
                                <select className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" name="" id="">
                                    <option selected>Choose Country</option>
                                    <option>USA</option>
                                    <option>India</option>
                                    <option>England</option>
                                    <option>China</option>
                                </select>
            </div>
            <br />
                            <div className="form-group col-md-12">
                                <input type="text" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" id="subject" name="_subject" placeholder="Subject *" required />
                            </div>
          </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <textarea className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" rows="5" id="message" name="message" placeholder="Type your message here"></textarea>
                            </div>
                        </div>
                        <div className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
                            <div className="form-group col-md-12">
                                <input type="file" name="attachment" className="" accept="image/png, image/jpeg" />
                            </div>
                        </div>
                        <br />
                                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 bg-blue-800 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"><a href="mailto:victorrmalhotra@gmail.com">Send Message</a></button>

                            <input type="hidden" name="_cc" value="vmalho393@west-mec.org" style={{display:"none"}} />
                            <input type="hidden" name="_autoresponse" value="You have made contact with victor please wait for at least a day for a message" />
          <input type="hidden" name="_next" value="https://victormal001.github.io/My-Portfolio/contact.html" style={{display: "none"}} />
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden " name="_url " value="http://localhost:3000/contact" style={{display: "none"}} />
                            <input type="text" name="_honey" style={{display:"none"}} />



          </form>
      </div>
      </div>
  )
}