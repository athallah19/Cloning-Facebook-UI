function showIcon() {
    $('#search-icon').show()
}

function hideIcon() {
    $('#search-icon').hide()
}

function showButton() {
    $('#btn-post').show()
}

function post() {
    alert('Posting Completed!')
    $('#btn-post').hide()
}

function menuModal() {
    let status = $('#menu-modal').css('display')
    if (status == 'block') {
        $('#menu-modal').hide()
        $('#gnb-menu').attr('src','image/gnb/6.png')
    } else {
        $('#menu-modal').show()
        $('#gnb-menu').attr('src','image/gnb/10.png')
    }
}

function accountModal() {
    let status = $('#account-modal').css('display')
    if (status == 'block') {
        $('#account-modal').hide()
    } else {
        $('#account-modal').show()
    }
}