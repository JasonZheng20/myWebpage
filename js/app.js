class App {
  constructor() {
    this.home = document.querySelector('.container#home');

    this.meButton = document.querySelector('.button#me');
    this.me = document.querySelector('.container#me');
    this.me.classList.add('inactive');

    this.resumeButton = document.querySelector('.button#resume');
    this.resume = document.querySelector('.container#resume');
    this.resume.classList.add('inactive');

    this.contactButton = document.querySelector('.button#contact');
    this.contact = document.querySelector('.container#contact');
    this.contact.classList.add('inactive');

    this.showMe = this.showMe.bind(this);
    this.meButton.addEventListener('click', this.showMe);

    this.showResume = this.showResume.bind(this);
    this.resumeButton.addEventListener('click', this.showResume);

    this.showContact = this.showContact.bind(this);
    this.contactButton.addEventListener('click', this.showContact);

    this.shrink = this.shrink.bind(this);
  }

  showMe() {
    this.me.classList.remove('inactive');
    this.resume.classList.add('inactive');
    this.contact.classList.add('inactive');
    this.shrink();
  }

  showResume() {
    this.me.classList.add('inactive');
    this.resume.classList.remove('inactive');
    this.contact.classList.add('inactive');
    this.shrink();
  }

  showContact() {
    this.me.classList.add('inactive');
    this.resume.classList.add('inactive');
    this.contact.classList.remove('inactive');
    this.shrink();
  }

  shrink() {
    console.log('hi');
    this.home.classList.remove('container');
    this.home.classList.add('shrunkenContainer');
  }
}
