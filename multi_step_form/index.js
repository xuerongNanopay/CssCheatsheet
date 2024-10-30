(function() {
  const maxPage = 4;
  let curPage = 1;
  const prevBtn = document.querySelector(".form .footer .prev");
  const nextBtn = document.querySelector(".form .footer .next");

  function movePage() {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
    if ( curPage === 1 ) {
      prevBtn.disabled = true;
    } else if ( curPage === maxPage ) {
      nextBtn.disabled = true;
    }

    document.querySelector(".form .pagination .active").classList.remove("active");
    document.querySelectorAll(".form .pagination .number")[curPage-1].classList.add("active");
    const stepNode = document.querySelector(".form .steps .step");
    const width = ((curPage-1)*stepNode.offsetWidth*-1)+"px";
    stepNode.parentNode.style.marginLeft = width;

  }

  prevBtn.addEventListener("click", function() {
    curPage -= 1;
    movePage();
  });

  nextBtn.addEventListener("click", function() {
    curPage += 1;
    movePage();
  });
}
)();