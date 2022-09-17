from rest_framework import viewsets
from stores.serializers import StoreSerializer, AccessibilityCategorySerializer
from stores.models import Store, AccessibilityCategory


class StoreViewSet(viewsets.ModelViewSet):
    serializer_class = StoreSerializer
    queryset = Store.objects.all()


class AccessibilityCategoryViewSet(viewsets.ModelViewSet):
    serializer_class = AccessibilityCategorySerializer

    def get_queryset(self):
        return AccessibilityCategory.objects.filter(store_id=self.kwargs.get('store_id'))
