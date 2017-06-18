class App {
  constructor() {
    this.home = document.querySelector('.container#home');
    this.title = document.querySelector('.title');

    this.meButton = document.querySelector('.button#me');
    this.me = document.querySelector('.container3#meC');

    this.resumeButton = document.querySelector('.button#resume');
    this.resume = document.querySelector('.container3#resumeC');

    this.contactButton = document.querySelector('.button#contact');
    this.contact = document.querySelector('.container3#contactC');

    this.showMe = this.showMe.bind(this);
    this.meButton.addEventListener('click', this.showMe);

    this.showResume = this.showResume.bind(this);
    this.resumeButton.addEventListener('click', this.showResume);

    this.showContact = this.showContact.bind(this);
    this.contactButton.addEventListener('click', this.showContact);
  }

  showMe() {
    this.title.textContent = "Me";
    this.title.style = "font-size: 32px";
    this.meButton.classList.add('highlighted');
    this.resumeButton.classList.remove('highlighted');
    this.contactButton.classList.remove('highlighted');
    this.home.style.transform = "translateY(-40vh)";
    this.me.style.transform = "translateY(-82vh)";
    this.contact.style.transform = "translateY(82vh)";
    this.resume.style.transform = "translateY(82vh)";
  }

  showResume() {
    this.title.textContent = "Resume";
    this.title.style = "font-size: 32px";
    this.meButton.classList.remove('highlighted');
    this.resumeButton.classList.add('highlighted');
    this.contactButton.classList.remove('highlighted');
    this.home.style.transform = "translateY(-40vh)";
    this.me.style.transform = "translateY(82vh)";
    this.resume.style.transform = "translateY(-82vh)";
    this.contact.style.transform = "translateY(82vh)";
  }

  showContact() {
    this.title.textContent = "Contact"
    this.title.style = "font-size: 32px";
    this.meButton.classList.remove('highlighted');
    this.resumeButton.classList.remove('highlighted');
    this.contactButton.classList.add('highlighted');
    this.home.style.transform = "translateY(-40vh)";
    this.me.style.transform = "translateY(82vh)";
    this.resume.style.transform = "translateY(82vh)";
    this.contact.style.transform = "translateY(-82vh)";
  }
}
