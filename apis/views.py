from rest_framework import viewsets
from .serializer import TaskSerializer
from rest_framework.response import Response
from rest_framework import status
from .models import Exercise1
# from backend_api.utils import ExerciseData
from backend_api.utils.ExerciseData import ExerciseData
from django.http import JsonResponse

# from myapp.utils.alumno_utils import AlumnoUtils


# Create your views here.
class Exercise1view(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Exercise1.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        # Manipular los datos según sea necesario
        data = serializer.validated_data
        chain = data['chain']
        print("dataaaaaaa:",chain)
        self.perform_create(serializer)

        # Crear instancia de Exercise1Data y realizar cálculos
        ExcerciseObjetc = ExerciseData(chain)
        val = ExcerciseObjetc.calculate_result()

            

        return Response({val}, status=status.HTTP_201_CREATED)