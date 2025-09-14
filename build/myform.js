/******/ (() => { // webpackBootstrap
/*!****************************!*\
  !*** ./src/form/myform.js ***!
  \****************************/
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('customTool-form');
  const input = document.getElementById('customTool_name');
  const result = document.getElementById('customTool-result');
  function renderSaved(data) {
    if (!data || !data.length) return;
    let html = '<h3>Saved Entries:</h3><ul>';
    data.forEach(item => {
      html += `<li>${item.text} (${item.time})</li>`;
    });
    html += '</ul>';
    result.innerHTML = html;
  }

  // Submit form via Ajax
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const value = input.value.trim();
      if (!value) {
        alert('Text field is empty!');
        return;
      }

      // eslint-disable-next-line no-undef
      fetch(ppt_tool_ajax.ajax_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          action: 'ppt_customTool_save_data',
          // eslint-disable-next-line no-undef
          nonce: ppt_tool_ajax.nonce,
          text: value
        })
      }).then(res => res.json()).then(data => {
        if (data.success) {
          renderSaved(data.data.saved_data);
          input.value = ''; // clear input
        } else {
          alert('Error: ' + data.data);
        }
      }).catch(err => console.error(err));
    });
  }
});
/******/ })()
;
//# sourceMappingURL=myform.js.map