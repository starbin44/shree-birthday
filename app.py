
from flask import Flask, render_template
import os

app = Flask(__name__)


@app.route("/")
def home():

    photos = []

    photos_folder = os.path.join(app.static_folder, "photos")

    # Automatically detect JPG, JPEG and PNG
    for i in range(1, 21):

        found_photo = None

        for extension in ["jpg", "jpeg", "png", "JPG", "JPEG", "PNG"]:

            filename = f"photo{i}.{extension}"
            filepath = os.path.join(photos_folder, filename)

            if os.path.exists(filepath):
                found_photo = filename
                break

        photos.append(found_photo)

    return render_template(
        "index.html",
        photos=photos
    )


if __name__ == "__main__":
    app.run(debug=True)

