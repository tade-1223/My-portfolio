#!/usr/bin/env bash

set -o errexit

pip install -r requirements.txt

python manage.py migrate --no-input

python manage.py shell -c "

from projects.models import Project
from blog.models import BlogPost
from portfolio.models import Certification, Education, Experience

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



# Ensure Education records exist

education_data = [
    {
        'institution': 'DULIE CHEFFIE PRIMARY SCHOOL',
        'degree': 'Primary School Leaving Certificate',
        'field_of_study': '',
        'description': 'Completed Grade 1 through Grade 8, establishing a strong foundation for secondary education.',
        'start_date': '2010-09-01',
        'end_date': '2018-06-30',
        'display_order': 3,
    },
    {
        'institution': 'WOLDIA GENERAL AND SECONDARY SCHOOL',
        'degree': 'Ethiopian Secondary School Leaving Certificate Examination',
        'field_of_study': '',
        'description': 'Completed secondary education from Grade 9 through Grade 12, preparing for higher education.',
        'start_date': '2018-09-01',
        'end_date': '2022-09-30',
        'display_order': 2,
    },
    {
        'institution': 'University of Gondar',
        'degree': 'BSc',
        'field_of_study': 'Computer Science',
        'description': 'Completed a Bachelor of Science degree in Computer Science with a foundation in software engineering, web development, databases, networking, algorithms, and computer systems.',
        'start_date': '2023-03-01',
        'end_date': '2026-06-30',
        'display_order': 1,
    },
]

for data in education_data:
    Education.objects.update_or_create(
        institution=data['institution'],
        defaults=data
    )
    print(f"Updated education: {data['institution']}")


# Ensure Experience records exist

experience_data = [
    {
        'company': 'University of Gondar Data Center',
        'position': 'Networking Intern',
        'description': 'Gained practical experience in computer networking, network administration, infrastructure, troubleshooting, IT support, and data center operations.',
        'location': 'University of Gondar',
        'start_date': '2025-06-01',
        'end_date': '2025-08-31',
        'is_current': False,
        'display_order': 3,
    },
    {
        'company': 'University of Gondar',
        'position': 'Final Year Project',
        'description': 'Designed and developed an AI-based web platform for online learning and remote education. The system supports course management, assignment submission, virtual learning, and an AI assistant to support students and instructors.',
        'location': 'University of Gondar',
        'start_date': '2026-01-01',
        'end_date': '2026-05-31',
        'is_current': False,
        'display_order': 2,
    },
    {
        'company': 'Ethiora',
        'position': 'Personal Project',
        'description': 'Building a modern Ethiopian online marketplace that connects customers and local businesses through digital commerce. The platform focuses on local products, modern shopping experiences, product discovery, and scalable full-stack architecture.',
        'location': 'Ethiopia',
        'start_date': '2026-07-01',
        'end_date': None,
        'is_current': True,
        'display_order': 1,
    },
]

for data in experience_data:
    Experience.objects.update_or_create(
        company=data['company'],
        position=data['position'],
        defaults=data
    )
    print(f"Updated experience: {data['position']} -> {data['company']}")

print('Education and experience records updated successfully.')

print('Cloudinary references and portfolio data checked successfully.')

"

python manage.py collectstatic --no-input