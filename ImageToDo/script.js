document.addEventListener("DOMContentLoaded", function() {
    const dropzone = document.getElementById('dropzone');
    const fileInput = document.getElementById('fileInput');
    const fileList = document.getElementById('fileList');
    const browseClick = document.getElementById('browseClick');
    const MAX_IMAGES = 5;

    // Handle drag over event
    dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.classList.add('dragging');
    });

    // Handle drag leave event
    dropzone.addEventListener('dragleave', () => {
        dropzone.classList.remove('dragging');
    });

    // Handle drop event
    dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.classList.remove('dragging');

        const files = e.dataTransfer.files;
        handleFiles(files);
    });

    // Trigger file input click when the span is clicked
    browseClick.addEventListener('click', () => {
        fileInput.click();
    });

    // Trigger file input click when the dropzone is clicked
    dropzone.addEventListener('click', () => {
        fileInput.click();
    });

    // Handle file input change event
    fileInput.addEventListener('change', () => {
        const files = fileInput.files;
        handleFiles(files);
    });

    // Function to handle files (both drop and input selection)
    function handleFiles(files) {
        if (fileList.childElementCount + files.length > MAX_IMAGES) {
            alert(`You can upload a maximum of ${MAX_IMAGES} images.`);
            return;
        }

        for (let file of files) {
            if (file.type.startsWith('image/') && file.size < 1 * 1024 * 1024) {
                displayFile(file);
            } else {
                alert('Only image files under 1MB are allowed.');
            }
        }
    }

    // Function to display the uploaded file
    function displayFile(file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const div = document.createElement('div');
            div.className = 'file-item';

            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = file.name;
            img.className = 'thumbnail';

            const textarea = document.createElement('textarea');
            textarea.placeholder = 'Add a description...';
            textarea.className = 'description';

            const deleteIcon = document.createElement('span');
            deleteIcon.textContent = 'Delete';
            deleteIcon.className = 'delete-icon';

            // Handle delete action
            deleteIcon.addEventListener('click', () => {
                div.remove();
                saveToLocalStorage();
            });

            // Save description changes
            textarea.addEventListener('input', saveToLocalStorage);

            div.appendChild(img);
            div.appendChild(textarea);
            div.appendChild(deleteIcon);
            fileList.appendChild(div);

            saveToLocalStorage();
        };

        reader.readAsDataURL(file);
    }

    // Save to local storage
    function saveToLocalStorage() {
        const imagesData = [];
        fileList.querySelectorAll('.file-item').forEach(div => {
            const img = div.querySelector('.thumbnail');
            const description = div.querySelector('.description').value;

            imagesData.push({
                src: img.src,
                description: description
            });
        });

        localStorage.setItem('storedImagesData', JSON.stringify(imagesData));
    }

    // Load from local storage
    function loadFromLocalStorage() {
        const storedImagesData = JSON.parse(localStorage.getItem('storedImagesData') || '[]');

        storedImagesData.forEach(data => {
            const div = document.createElement('div');
            div.className = 'file-item';

            const img = document.createElement('img');
            img.src = data.src;
            img.className = 'thumbnail';

            const textarea = document.createElement('textarea');
            textarea.value = data.description;
            textarea.className = 'description';

            const deleteIcon = document.createElement('span');
            deleteIcon.textContent = 'Delete';
            deleteIcon.className = 'delete-icon';

            deleteIcon.addEventListener('click', () => {
                div.remove();
                saveToLocalStorage();
            });

            textarea.addEventListener('input', saveToLocalStorage);

            div.appendChild(img);
            div.appendChild(textarea);
            div.appendChild(deleteIcon);
            fileList.appendChild(div);
        });
    }

    // Load images from local storage when the page loads
    loadFromLocalStorage();
});
