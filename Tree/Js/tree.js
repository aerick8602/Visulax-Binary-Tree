let previousY = null;
const firstOpenStates = {
    preOrder: true,
    inOrder: true,
    postOrder: true
};

function toggleContent(id) {
    const element = document.getElementById(id);
    const contentContainer = document.getElementById(id + 'Content');

    const onMouseMove = (event) => {
        const currentY = event.clientY;

        if (firstOpenStates[id] && previousY !== null && currentY > previousY) {
            console.log('Mouse is moving downwards over ' + id);
            contentContainer.classList.add('active');
            firstOpenStates[id] = false;
            element.removeEventListener('mousemove', onMouseMove); // Remove listener after activation
        }

        previousY = currentY;
    };

    if (firstOpenStates[id]) {
        element.addEventListener('mousemove', onMouseMove);

        element.addEventListener('mouseleave', () => {
            previousY = null; // Reset the previousY when the mouse leaves the element
            element.removeEventListener('mousemove', onMouseMove); // Cleanup listener on leave
        });
    }
}

function toggleClick(id) {
    const contentContainer = document.getElementById(id + 'Content');
    if (contentContainer.classList.contains('active')) {
        contentContainer.classList.remove('active');
    } else {
        contentContainer.classList.add('active');
    }
}