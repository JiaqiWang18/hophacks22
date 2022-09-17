from rest_framework import viewsets
from rest_framework.response import Response
from stores.serializers import StoreSerializer, AccessibilityCategorySerializer
from stores.models import Store, AccessibilityCategory


class StoreViewSet(viewsets.ModelViewSet):
    serializer_class = StoreSerializer
    queryset = Store.objects.all()

    def list(self, request, *args, **kwargs):
        category = request.GET.get('category')
        if category:
            queryset = Store.objects.filter(store_category__contains=category)
        else:
            queryset = Store.objects.all()
        serializer = StoreSerializer(queryset, many=True)
        return Response(serializer.data)


class AccessibilityCategoryViewSet(viewsets.ModelViewSet):
    serializer_class = AccessibilityCategorySerializer

    def get_queryset(self):
        return AccessibilityCategory.objects.filter(store_id=self.kwargs.get('store_id'))
