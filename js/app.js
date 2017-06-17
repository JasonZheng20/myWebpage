class App {
  constructor() {
    this.home = document.querySelector('.container#home');

    this.meButton = document.querySelector('.button#me');
    this.me = document.querySelector('.container#meC');

    this.resumeButton = document.querySelector('.button#resume');
    this.resume = document.querySelector('.container#resumeC');

    this.contactButton = document.querySelector('.button#contact');
    this.contact = document.querySelector('.container#contactC');

    this.showMe = this.showMe.bind(this);
    this.meButton.addEventListener('click', this.showMe);

    this.showResume = this.showResume.bind(this);
    this.resumeButton.addEventListener('click', this.showResume);

    this.showContact = this.showContact.bind(this);
    this.contactButton.addEventListener('click', this.showContact);
  }

  showMe() {
    this.home.style.transform = "translateY(-40vh)";
    this.me.style.transform = "translateY(-77vh)";
    this.resume.style.transform = "translateY(77vh)";
    this.contact.style.transform = "translateY(77vh)";

    // this.me.classList.remove('inactive');
    // this.resume.classList.add('inactive');
    // this.contact.classList.add('inactive');
  }

  showResume() {
    this.home.style.transform = "translateY(-40vh)";
    this.me.style.transform = "translateY(77vh)";
    this.resume.style.transform = "translateY(-77vh)";
    this.contact.style.transform = "translateY(77vh)";
    // this.me.classList.add('inactive');
    // this.resume.classList.remove('inactive');
    // this.contact.classList.add('inactive');
  }

  showContact() {
    this.home.style.transform = "translateY(-40vh)";
    this.me.style.transform = "translateY(77vh)";
    this.resume.style.transform = "translateY(77vh)";
    this.contact.style.transform = "translateY(-77vh)";
    // this.me.classList.add('inactive');
    // this.resume.classList.add('inactive');
    // this.contact.classList.remove('inactive');
  }
}
