from django.db import models


class Profile(models.Model):
    name = models.CharField(max_length=100)
    professional_title = models.CharField(max_length=200)
    bio = models.TextField()

    profile_image = models.ImageField(
        upload_to="profile/",
        blank=True,
        null=True
    )

    email = models.EmailField()
    phone = models.CharField(max_length=30, blank=True)
    location = models.CharField(max_length=200, blank=True)

    github = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)
    website = models.URLField(blank=True)

    resume = models.FileField(
        upload_to="resume/",
        blank=True,
        null=True
    )

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Profile"
        verbose_name_plural = "Profile"

    def __str__(self):
        return self.name


class Skill(models.Model):

    CATEGORY_CHOICES = [
        ("frontend", "Frontend"),
        ("backend", "Backend"),
        ("database", "Database"),
        ("ai/ml", "AI / ML"),
        ("mobile", "Mobile"),
        ("devops", "DevOps"),
        ("tools", "Tools"),
    ]

    name = models.CharField(
        max_length=100
    )

    category = models.CharField(
        max_length=50,
        choices=CATEGORY_CHOICES
    )

    proficiency = models.PositiveIntegerField()

    icon = models.CharField(
        max_length=100,
        blank=True,
        null=True
    )

    display_order = models.PositiveIntegerField(
        default=0
    )

    def __str__(self):
        return self.name


class SocialLink(models.Model):

    platform = models.CharField(max_length=50)
    url = models.URLField()
    icon = models.CharField(max_length=100, blank=True)

    display_order = models.PositiveIntegerField(
        default=0
    )

    class Meta:
        ordering = ["display_order"]

    def __str__(self):
        return self.platform
class Experience(models.Model):
    company = models.CharField(max_length=200)
    position = models.CharField(max_length=200)

    description = models.TextField()

    location = models.CharField(
        max_length=200,
        blank=True
    )

    start_date = models.DateField()
    end_date = models.DateField(
        blank=True,
        null=True
    )

    is_current = models.BooleanField(
        default=False
    )

    display_order = models.PositiveIntegerField(
        default=0
    )

    class Meta:
        ordering = ["-start_date", "display_order"]

    def __str__(self):
        return f"{self.position} - {self.company}"


class Education(models.Model):
    institution = models.CharField(max_length=200)

    degree = models.CharField(
        max_length=200
    )

    field_of_study = models.CharField(
        max_length=200,
        blank=True
    )

    description = models.TextField(
        blank=True
    )

    start_date = models.DateField()

    end_date = models.DateField(
        blank=True,
        null=True
    )

    display_order = models.PositiveIntegerField(
        default=0
    )

    class Meta:
        ordering = ["-start_date", "display_order"]

    def __str__(self):
        return f"{self.degree} - {self.institution}"


class Certification(models.Model):
    name = models.CharField(
        max_length=200
    )

    organization = models.CharField(
        max_length=200
    )

    issue_date = models.DateField()

    credential_id = models.CharField(
        max_length=200,
        blank=True
    )

    credential_url = models.URLField(
        blank=True
    )

    certificate_file = models.FileField(
        upload_to="certificates/",
        blank=True,
        null=True
    )

    class Meta:
        ordering = ["-issue_date"]

    def __str__(self):
        return self.name