# Projekat_Web2
- Web application for online food delivery
- This is the frontend part of the web application, developed in Angular 13
- The objective of this app is to provide online food delivery service. There are three types of users in the app: Admin, Consumer, and Deliverer.
- Admin can add, delete, and modify food items. Admin can view all types of the user in the system, as well as all past and current orders. He is also able to accept or decline new Deliveries.
- Consumers can order food delivery with selected available food items. When the order is accepted by the deliverer, the time starts counting down to the end of the current delivery. Consumers can also view all the past orders, and the status of the current one.
- The last type of user in the system is Deliverer. Once the Consumer orders a food delivery, consumers can view that order request, and can ignore it, or pick it up. When the deliverer accepts the order, the time starts counting down to the end of the current delivery. Consumers also can view all the past orders.
- The app is configured to run in the Docker environment and use Kubernetes to manage Docker Containers. Also, it is optimized to run on the Amazon EKS platform. For creating and maintaining the platform, the Terraform tool has been used in the project.
- This project is developed for Faculty studies purposes. 
