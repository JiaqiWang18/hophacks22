from rest_framework.routers import DefaultRouter
from stores.apis import AccessibilityCategoryViewSet, StoreViewSet

router = DefaultRouter()
router.register(r'stores/(?P<store_id>[^/.]+)/accessibility_categories', AccessibilityCategoryViewSet, basename='accessibility')
router.register(r'stores', StoreViewSet, basename='store')

urlpatterns = router.urls
