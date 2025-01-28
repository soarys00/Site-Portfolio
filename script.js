['sobre-mim-btn', 'conhecimentos-praticos-btn', 'meus-projetos-btn'].forEach(id => {
    document.getElementById(id).addEventListener('click', function (event) {
        event.preventDefault();
        toggleAndScroll(id.split('-btn')[0]);
    });
});

function toggleAndScroll(sectionId) {
    const section = document.getElementById(sectionId);
    const isVisible = section.style.display === 'block';

    document.querySelectorAll('.content').forEach(sec => sec.style.display = 'none');
    
    if (!isVisible) {
        section.style.display = 'block';
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
 
       window.onscroll = function() {
        const button = document.getElementById("back-to-top");
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    };


    
    












