from rest_framework.routers import DefaultRouter

from .views import (
    ProfileViewSet,
    SkillViewSet,
    SocialLinkViewSet,
    ExperienceViewSet,
    EducationViewSet,
    CertificationViewSet,
)


router = DefaultRouter()

router.register(
    r"profile",
    ProfileViewSet,
    basename="profile"
)

router.register(
    r"skills",
    SkillViewSet,
    basename="skills"
)

router.register(
    r"social-links",
    SocialLinkViewSet,
    basename="social-links"
)

router.register(
    r"experience",
    ExperienceViewSet,
    basename="experience"
)

router.register(
    r"education",
    EducationViewSet,
    basename="education"
)

router.register(
    r"certifications",
    CertificationViewSet,
    basename="certifications"
)


urlpatterns = router.urls