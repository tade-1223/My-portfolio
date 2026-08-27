#!/usr/bin/env bash
set -o errexit

pip install -r requirements.txt

python manage.py migrate --no-input

python manage.py shell -c "
from projects.models import Project
from blog.models import BlogPost

if Project.objects.count() == 0 and BlogPost.objects.count() == 0:
    print('Loading project and blog fixture...')
    import subprocess
    subprocess.run(['python', 'manage.py', 'loaddata', 'projects_blog.json'], check=True)
else:
    print('Projects or blog posts already exist. Skipping fixture.')
"

python manage.py collectstatic --no-input