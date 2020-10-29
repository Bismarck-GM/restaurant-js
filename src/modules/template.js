const PAGELOAD = (() => {
  let content = document.querySelector('#content');
  
  let mobileTitleContainer = document.createElement('div');
  mobileTitleContainer.classList.add('container', 'is-hidden-fullhd');
  let mobileTitle = document.createElement('h1');
  mobileTitle.classList.add('title');
  mobileTitle.innerText = 'CoDe.eATs( );';
  mobileTitleContainer.appendChild(mobileTitle);
  let mobileSubtitle = document.createElement('h2');
  mobileSubtitle.classList.add('subtitle');
  mobileSubtitle.innerText = "We serve 1's and 0's";
  mobileTitleContainer.appendChild(mobileSubtitle);
  content.appendChild(mobileTitleContainer);

  let tabs = document.createElement('div');
  tabs.classList.add('tabs', 'is-centered', 'is-boxed');
  let ul = document.createElement('ul');
  ul.classList.add('has-background-white-ter');
  let links = ['Home', 'Eat ( );', 'Sleep ( );', 'Code ( );', 'Repeat ( );']
  links.forEach(link => {
    let tab = document.createElement('li');
    tab.classList.add('tab-item');
    let anchor = document.createElement('a');
    anchor.textContent = link;
    tab.appendChild(anchor);
    ul.appendChild(tab);
  })
  tabs.appendChild(ul);
  tabs.firstChild.firstChild.classList.add('is-active');
  content.appendChild(tabs);

  let tabContent = document.createElement('div');
  tabContent.classList.add('container', 'is-widescreen', 'is-max-desktop')
  content.appendChild(tabContent);
  
  let footer = document.createElement('footer');
  footer.classList.add('footer', 'is-relative', 'mt-5');
  footer.innerHTML = `
  <div class="git-links">
  <div class="firm">
    <a href="https://github.com/Bismarck-GM/"><img src="https://raw.githubusercontent.com/Bismarck-GM/microverse-ruby-bot/develop/src/img/BismarckGMLogowhite-04.png" alt="Bismarck-GM Logo"></a>
  </div>
  </div>`;
  content.appendChild(footer);


  return {
      mobileTitleContainer,
      tabContent
  }
})();

const mobileTitleContainer = PAGELOAD.mobileTitleContainer;
const TABCONTENTS = PAGELOAD.tabContent;

export{
  PAGELOAD,
  mobileTitleContainer,
  TABCONTENTS
}