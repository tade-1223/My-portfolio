from django.contrib import admin

from .models import (
    Profile,
    Skill,
    SocialLink,
    Experience,
    Education,
    Certification,
)


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "professional_title",
        "email",
        "updated_at",
    )


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "category",
        "proficiency",
        "display_order",
    )

    list_filter = ("category",)

    search_fields = ("name",)

    ordering = (
        "display_order",
        "name",
    )


@admin.register(SocialLink)
class SocialLinkAdmin(admin.ModelAdmin):
    list_display = (
        "platform",
        "url",
        "display_order",
    )

    ordering = ("display_order",)


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = (
        "position",
        "company",
        "start_date",
        "end_date",
        "is_current",
    )

    list_filter = (
        "is_current",
    )

    search_fields = (
        "position",
        "company",
    )


@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = (
        "degree",
        "institution",
        "start_date",
        "end_date",
    )

    search_fields = (
        "degree",
        "institution",
    )


@admin.register(Certification)
class CertificationAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "organization",
        "issue_date",
    )

    search_fields = (
        "name",
        "organization",
    )