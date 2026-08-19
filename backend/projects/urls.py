from rest_framework.routers import DefaultRouter

from .views import (
    ProjectViewSet,
    TechnologyViewSet,
)


router = DefaultRouter()

router.register(
    r"projects",
    ProjectViewSet,
    basename="projects"
)

router.register(
    r"technologies",
    TechnologyViewSet,
    basename="technologies"
)


urlpatterns = router.urls