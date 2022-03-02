class Loader {
  hideLoader = () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('loader_hidden');
  }
}

export default Loader;