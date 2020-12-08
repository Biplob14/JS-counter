let count = 0; //count initialization

// select values and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        // counter action part
        if(styles.contains("decrease")) {
            count--;
        }
        else if(styles.contains("increase")) {
            count++;
        }
        else {
            count = 0;
        }
        // changing color depending on value
        if(count < 0)
            value.style.color = "red";
        if(count > 0) 
            value.style.color = "green";
        if(count == 0)
            value.style.color = "yellow";
        value.textContent = count; //assigning value as counter
    });
});