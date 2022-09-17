from rest_framework.serializers import ModelSerializer
from stores.models import Store, AccessibilityCategory
from users.serializers import UserSerializer


class AccessibilityCategorySerializer(ModelSerializer):
    class Meta:
        model = AccessibilityCategory
        fields = '__all__'


class StoreSerializer(ModelSerializer):
    accessibility_categories = AccessibilityCategorySerializer(many=True, required=False)
    owner = UserSerializer(required=False)

    class Meta:
        model = Store
        fields = '__all__'
