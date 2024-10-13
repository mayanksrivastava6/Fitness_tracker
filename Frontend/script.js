document.addEventListener("DOMContentLoaded", function () {
    // Initialize data arrays to store user inputs
    const workouts = [];
    const meals = [];

    // Capture form submission events for Workouts
    document.querySelector('.workout-form form').addEventListener('submit', function (e) {
        e.preventDefault();
        const exercise = document.getElementById('exercise').value;
        const duration = parseInt(document.getElementById('duration').value);
        const intensity = document.getElementById('intensity').value;
        const calories = parseInt(document.getElementById('calories').value);

        // Store workout data
        workouts.push({ exercise, duration, intensity, calories });

        // Update statistics and progress chart
        updateStats();
        updateProgressChart();
    });

    // Capture form submission events for Meals
    document.querySelector('.meal-form form').addEventListener('submit', function (e) {
        e.preventDefault();
        const mealType = document.getElementById('meal-type').value;
        const caloriesConsumed = parseInt(document.getElementById('calories-consumed').value);
        const macros = document.getElementById('macros').value;

        // Store meal data
        meals.push({ mealType, caloriesConsumed, macros });

        // Update statistics and progress chart
        updateStats();
        updateProgressChart();
    });

    // Function to update statistics based on the input data
    function updateStats() {
        const totalWorkouts = workouts.length;
        const totalCaloriesBurned = workouts.reduce((total, workout) => total + workout.calories, 0);
        const totalMeals = meals.length;

        const averageDuration = totalWorkouts > 0 ? (workouts.reduce((total, workout) => total + workout.duration, 0) / totalWorkouts).toFixed(1) : 0;

        // Update DOM elements with statistics
        document.querySelector('.stats .stat-card:nth-child(1) span').textContent = totalWorkouts;
        document.querySelector('.stats .stat-card:nth-child(2) span').textContent = totalCaloriesBurned;
        document.querySelector('.stats .stat-card:nth-child(3) span').textContent = totalMeals;

        // Scroll effect to show stats after updating
        document.querySelector('.progress-stats').scrollIntoView({ behavior: 'smooth' });
    }

    // Function to update the progress chart based on data
    function updateProgressChart() {
        // Calculate the percentage of the progress based on total calories burned
        const totalCaloriesBurned = workouts.reduce((total, workout) => total + workout.calories, 0);
        const goalCalories = 5000; // For example, a goal of 5000 calories burned
        const progressPercentage = totalCaloriesBurned > goalCalories ? 100 : (totalCaloriesBurned / goalCalories) * 100;

        // Update the progress bar width
        document.querySelector('.progress-bar .bar').style.width = `${progressPercentage}%`;
    }
});
