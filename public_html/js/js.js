document.addEventListener('keyup', (event) => {
    let get_body_id =document.body.id;
    let body_id = get_body_id.replace('slide-', '');
    body_id = parseInt(body_id);

    if (event.code = 'ArrowRight' && (body_id+1) <= 4){
        document.body.id = 'slide-' + (body_id);
    } else if (event.code == 'ArrowLeft' && (body_id-1) > 0){
        document.body.id = 'slide-' + (body_id-1);
    }
})

{/* <body id="slide-1"> */}