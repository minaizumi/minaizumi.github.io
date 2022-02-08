/* global bootstrap: false */

(function () {
    'use strict'

    // Disable empty links and submit buttons
    document.querySelectorAll('[href="#"], [type="submit"]')
        .forEach(function (link) {
            link.addEventListener('click', function (event) {
                event.preventDefault()
            })
        })

    function setActiveItem() {
        var hash = window.location.hash

        if (hash === '') {  
            return
        }

        var link = document.querySelector('.bd-aside a[href="' + hash + '"]')

        if (!link) {
            return
        }

        var active = document.querySelector('.bd-aside .active')
        var parent = link.parentNode.parentNode.previousElementSibling

        link.classList.add('active')

        if (!active) {
            return
        }

        var expanded = active.parentNode.parentNode.previousElementSibling

        active.classList.remove('active')

        if (expanded && parent !== expanded) {
            expanded.click()
        }
    }

    setActiveItem()
    window.addEventListener('hashchange', setActiveItem)
})()
