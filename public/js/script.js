document.querySelectorAll('[data-confirm-submit]').forEach(f=>f.addEventListener('submit',e=>{if(!confirm('Submit this test?'))e.preventDefault()}));
