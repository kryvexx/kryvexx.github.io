const fades = document.querySelectorAll('.fade');
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('in'), i * 60);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.05 });
  fades.forEach(el => obs.observe(el));


// magari un altra volta
// const welcome = ["Welcome", "What's up?", "How's it going?", "How are you?"];
// document.getElementById("welcome").innerText = welcome[Math.floor(Math.random() * welcome.length)];