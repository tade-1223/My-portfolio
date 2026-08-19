from rest_framework import serializers

from .models import Project, Technology


class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = [
            "id",
            "name",
            "category",
            "icon",
        ]


class ProjectSerializer(serializers.ModelSerializer):
    technologies = TechnologySerializer(
        many=True,
        read_only=True
    )

    class Meta:
        model = Project
        fields = [
            "id",
            "title",
            "slug",
            "short_description",
            "description",
            "image",
            "github_url",
            "live_url",
            "technologies",
            "featured",
            "status",
            "created_at",
            "updated_at",
        ]