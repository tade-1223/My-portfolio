#!/usr/bin/env bash

set -o errexit

pip install -r requirements.txt

python manage.py migrate --no-input

python manage.py shell -c "

from projects.models import Project
from blog.models import BlogPost
from portfolio.models import Certification

project_images = {

    'AI-Based E-Learning and Remote Education System': 'projects/learning',

    'Ethiora': 'projects/ethiora',

    'My Portfolio': 'projects/portfolio',

}

blog_images = {

    'My Journey Through Education': 'blog/my-journey',

    'Building My First Full-Stack Portfolio with Django and React': 'blog/portfolio',

    'What I Learned About APIs While Building My Portfolio': 'blog/api_2Q5J2fY',

    'Building Ethiora: An Ethiopian Online Marketplace': 'blog/ethioraa',

    'What I Learned Building an AI-Based E-Learning System': 'blog/learning',

    'React and Django: Why I Like Full-Stack Development': 'blog/react-django_I2F45e1',

    'My Experience Learning AI, Machine Learning, and Deep Learning': 'blog/ai',

    'From HTML and CSS to Full-Stack Development': 'blog/html-fsd',

}

for title, image in project_images.items():

    project = Project.objects.filter(title=title).first()

    if project:

        project.image.name = image

        project.save(update_fields=['image'])

        print(f'Updated project: {title} -> {image}')

for title, image in blog_images.items():

    post = BlogPost.objects.filter(title=title).first()

    if post:

        post.image.name = image

        post.save(update_fields=['image'])

        print(f'Updated blog: {title} -> {image}')

# Update cybersecurity certificate

certificate = Certification.objects.filter(
    name='Introduction to cybersecurity'
).first()

if certificate:

    certificate.certificate_file.name = 'certificates/introduction-to-cybersecurity.pdf'

    certificate.save(update_fields=['certificate_file'])

    print(
        'Updated certification: '
        'Introduction to cybersecurity -> '
        'certificates/introduction-to-cybersecurity.pdf'
    )

else:

    print(
        'Certification not found: '
        'Introduction to cybersecurity'
    )

print('Cloudinary image and certificate references updated successfully.')

"

python manage.py collectstatic --no-input