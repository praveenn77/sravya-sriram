function getRSVPElements() {
    const rsvpId = ['rsvp-info', 'rsvp-form', 'rsvp-submitting', 'rsvp-error']
    const rsvpUserInfo = document.getElementById('rsvp-user-info');
    return {
        INFO: 'rsvp-info',
        FORM: 'rsvp-form',
        SUBMITTING: 'rsvp-submitting',
        ERROR: 'rsvp-error',
        show: (showId, textContent) => {
            if (!rsvpUserInfo) {
                return;
            }
            rsvpId.forEach((id) => {
                const ele = document.getElementById(id);
                if (!ele) return;
                if (id === showId) {
                    ele.style.display = 'block';
                } else {
                    ele.style.display = 'none';
                }
            });
            if (showId === 'rsvp-info') {
                rsvpUserInfo.textContent = textContent;
            }
        },

    }
}



function onFormChange() {
    const nameInput = document.getElementById('name');
    const name = nameInput.value;
    const nogInput = document.getElementById('no_of_guest');
    const nocInput = document.getElementById('no_of_child');
    const songInput = document.getElementById('song_name');
    const albumInput = document.getElementById('song_album');

    if (nogInput.value.length > 0) {
        nogInput.setAttribute('data-has-value', '');
    } else {
        nogInput.removeAttribute('data-has-value');
    }

    if (nocInput.value.length > 0) {
        nocInput.setAttribute('data-has-value', '');
    } else {
        nocInput.removeAttribute('data-has-value');
    }

    if (songInput.value.length > 0) {
        songInput.setAttribute('data-has-value', '');
    } else {
        songInput.removeAttribute('data-has-value');
    }

    if (albumInput.value.length > 0) {
        albumInput.setAttribute('data-has-value', '');
    } else {
        albumInput.removeAttribute('data-has-value');
    }

    const emailInput = document.getElementById('email');

    if (emailInput.value.length > 0) {
        emailInput.setAttribute('data-has-value', '');
    } else {
        emailInput.removeAttribute('data-has-value');
    }

    if (name.length > 0) {
        const submitBtn = document.getElementById('submit');
        submitBtn.removeAttribute('disabled');
        nameInput.setAttribute('data-has-value', '');
    } else {
        const submitBtn = document.getElementById('submit');
        submitBtn.setAttribute('disabled', '');
        nameInput.removeAttribute('data-has-value');
    }
}

function onContainerLoad() {
    const name = localStorage.getItem('rsvp-name');
    let nog = localStorage.getItem('rsvp-nog');
    const rsvpElements = getRSVPElements()

    if (name) {
        nog = nog ? parseInt(nog) : 0;
        const rsvpText = nog && !isNaN(nog) && nog > 0 ? `${name} (+${nog})` : name;
        rsvpElements.show(rsvpElements.INFO, rsvpText);
    }
    else {
        rsvpElements.show(rsvpElements.FORM);
    }
}

function onSubmitAnother() {
    localStorage.clear();
    onContainerLoad();
}
function onFormSubmit() {
    const nameInput = document.getElementById('name');
    const name = nameInput.value;
    const nogInput = document.getElementById('no_of_guest');
    const email = document.getElementById('email').value;
    const nocInput = document.getElementById('no_of_child');
    const songInput = document.getElementById('song_name');
    const albumInput = document.getElementById('song_album');
    let nog = nogInput.value;
    nog = nog ? parseInt(nog) : 0;
    nog = isNaN(nog) ? 0 : nog;
    nog = nog >= 0 ? nog : 0;

    let noc = nocInput.value;
    noc = noc ? parseInt(noc) : 0;
    noc = isNaN(noc) ? 0 : noc;
    noc = noc >= 0 ? noc : 0;


    if (name.length <= 0) {
        return;
    }
    const rsvpElements = getRSVPElements();
    rsvpElements.show(rsvpElements.SUBMITTING);
    saveToDB({ name, nog, email, noc, song: songInput.value, album: albumInput.value });
}



function saveToDB({ name, nog, email, noc, song, album }) {
    const url = 'https://script.google.com/macros/s/AKfycbyAolZAb2EREXCd4NJ7MD8UYnI2dc-hkinjSFZPnovxirwmo3m1RECMxp0x4QyqBXlLZg/exec'

    const data = {
        name,
        guests: nog,
        email,
        noc,
        song,
        album
    };

    fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            localStorage.setItem('rsvp-name', name);
            localStorage.setItem('rsvp-nog', nog + noc);
            localStorage.setItem('rsvp-email', email);
            onContainerLoad();
        })
        .catch(error => {
            console.error(error);
            const rsvpElements = getRSVPElements();
            rsvpElements.show(rsvpElements.ERROR);
        });
}


function onElementAttached(selector, callback) {
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === "childList") {
                mutation.addedNodes.forEach((node) => {
                    if (node.matches && node.matches(selector)) {
                        callback(node);
                    }
                });
            }
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
}

function onEventLoad() {
    const elements = document.getElementsByClassName('css-1n6xs0j');
    Array.from(elements).forEach(ele => {
        if (ele.textContent === 'Click here to navigate') {
            ele.classList.add('navigate');
            ele.addEventListener('click', () => {
                window.open('https://maps.app.goo.gl/c8Ax6Hcxn6FTNrAc7', '_blank')
            })
        }
    });
}

function onMapLoad() {
    const elements = document.getElementsByClassName('css-1920aoq');
    Array.from(elements).forEach(ele => {
        if (ele.textContent === 'Click here to navigate') {
            ele.classList.add('navigate');
            ele.addEventListener('click', () => {
                window.open('https://maps.app.goo.gl/c8Ax6Hcxn6FTNrAc7', '_blank')
            })
        }
    });
}

function addRSVPButton() {
    const oldRef = document.querySelector(`a[href="/us/wedding/rsvp"]`);
    if (!oldRef) {
        return;
    }
    // const newRef = document.createElement('div');
    // newRef.classList.add('css-1pnbmhy');
    // newRef.innerText = 'RSVP';
    // oldRef.parentNode.replaceChild(newRef, oldRef);
    oldRef.setAttribute('href', '#');
    oldRef.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        const rsvpLink = document.querySelector(`a[href="/us/wedding/rsvp2"]`);
        if (rsvpLink) {
            rsvpLink.click();
        }
    });
}

// Usage
onElementAttached(`div[data-testid="event-row-0"]`, (element) => {
    addRSVPButton();
    onEventLoad();
});

// Usage
onElementAttached(".EmbedItem", (element) => {
    try {
        onContainerLoad()
    } catch (e) {
        console.log(e);
    }
    onMapLoad();
});


// Handle Initial Load
window.addEventListener('load', onEventLoad);
window.addEventListener('load', addRSVPButton);