 // Sample recipe data
        const recipes = [
            {
                id: 1,
                title: "Tarte au citron meringuée",
                category: "tarts",
                prepTime: "30 min",
                cookTime: "25 min",
                servings: "8 parts",
                difficulty: "Moyen",
                rating: 4.5,
                image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                ingredients: [
                    "200g de farine",
                    "100g de beurre",
                    "50g de sucre",
                    "1 pincée de sel",
                    "4 citrons",
                    "3 œufs",
                    "150g de sucre",
                    "50g de beurre",
                    "2 blancs d'œuf",
                    "75g de sucre glace"
                ],
                instructions: [
                    "Préparer la pâte sablée en mélangeant farine, beurre, sucre et sel.",
                    "Faire cuire la pâte à blanc 15 min à 180°C.",
                    "Préparer la crème au citron avec les œufs, jus de citron, sucre et beurre.",
                    "Verser la crème sur la pâte et cuire 10 min.",
                    "Monter les blancs en neige avec le sucre glace et dorer à four chaud."
                ]
            },
            {
                id: 2,
                title: "Gâteau au chocolat fondant",
                category: "cakes",
                prepTime: "20 min",
                cookTime: "25 min",
                servings: "6 parts",
                difficulty: "Facile",
                rating: 4.8,
                image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                ingredients: [
                    "200g de chocolat noir",
                    "150g de beurre",
                    "4 œufs",
                    "100g de sucre",
                    "50g de farine"
                ],
                instructions: [
                    "Faire fondre le chocolat et le beurre au bain-marie.",
                    "Battre les œufs avec le sucre jusqu'à ce que le mélange blanchisse.",
                    "Ajouter le chocolat fondu, puis la farine.",
                    "Verser dans un moule beurré et fariné.",
                    "Cuire 25 min à 180°C."
                ]
            },
            {
                id: 3,
                title: "Cookies aux pépites de chocolat",
                category: "cookies",
                prepTime: "15 min",
                cookTime: "10 min",
                servings: "12 cookies",
                difficulty: "Facile",
                rating: 4.7,
                image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                ingredients: [
                    "250g de farine",
                    "150g de beurre mou",
                    "100g de sucre roux",
                    "100g de sucre blanc",
                    "1 œuf",
                    "1 c. à café de levure",
                    "1 pincée de sel",
                    "200g de pépites de chocolat"
                ],
                instructions: [
                    "Mélanger les sucres et le beurre jusqu'à obtenir une crème.",
                    "Ajouter l'œuf, puis la farine, levure et sel.",
                    "Incorporer les pépites de chocolat.",
                    "Former des boules et les disposer sur une plaque.",
                    "Cuire 10 min à 180°C."
                ]
            },
            {
                id: 4,
                title: "Croissants maison",
                category: "pastries",
                prepTime: "30 min",
                cookTime: "20 min",
                servings: "8 croissants",
                difficulty: "Difficile",
                rating: 4.2,
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                ingredients: [
                    "500g de farine",
                    "10g de sel",
                    "80g de sucre",
                    "20g de levure boulangère",
                    "300g de beurre",
                    "25cl de lait"
                ],
                instructions: [
                    "Préparer la pâte avec farine, sel, sucre, levure et lait.",
                    "Laisser reposer 1h au frais.",
                    "Étaler la pâte et incorporer le beurre en plusieurs tours.",
                    "Découper en triangles et rouler pour former les croissants.",
                    "Cuire 20 min à 200°C."
                ]
            },
            {
                id: 5,
                title: "Tiramisu classique",
                category: "desserts",
                prepTime: "30 min",
                cookTime: "0 min",
                servings: "6 parts",
                difficulty: "Moyen",
                rating: 4.9,
                image: "https://images.unsplash.com/photo-1564128442383-9201fcc740eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                ingredients: [
                    "250g de mascarpone",
                    "3 œufs",
                    "80g de sucre",
                    "24 biscuits à la cuillère",
                    "20cl de café fort",
                    "Cacao en poudre"
                ],
                instructions: [
                    "Séparer les blancs des jaunes d'œufs.",
                    "Battre les jaunes avec le sucre, ajouter le mascarpone.",
                    "Monter les blancs en neige et les incorporer délicatement.",
                    "Tremper les biscuits dans le café et les disposer dans un plat.",
                    "Alterner couches de biscuits et crème, terminer par du cacao."
                ]
            },
            {
                id: 6,
                title: "Macarons à la framboise",
                category: "cookies",
                prepTime: "40 min",
                cookTime: "15 min",
                servings: "20 macarons",
                difficulty: "Difficile",
                rating: 4.6,
                image: "https://images.unsplash.com/photo-1623067466530-bd31c4e9f5c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                ingredients: [
                    "100g de poudre d'amande",
                    "100g de sucre glace",
                    "75g de sucre",
                    "2 blancs d'œuf",
                    "Colorant alimentaire rose",
                    "100g de confiture de framboise"
                ],
                instructions: [
                    "Tamiser poudre d'amande et sucre glace.",
                    "Monter les blancs en neige avec le sucre jusqu'à bec d'oiseau.",
                    "Incorporer délicatement les poudres et le colorant.",
                    "Former des cercles sur une plaque et laisser croûter 30 min.",
                    "Cuire 15 min à 150°C, puis garnir de confiture."
                ]
            }
        ];

        // DOM Elements
        const recipesContainer = document.getElementById('recipes-container');
        const categoryButtons = document.querySelectorAll('.category-btn');
        const modal = document.getElementById('recipe-modal');
        const closeModal = document.getElementById('close-modal');

        // Display all recipes initially
        displayRecipes(recipes);

        // Category filter functionality
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active category
                categoryButtons.forEach(btn => btn.classList.remove('active-category'));
                button.classList.add('active-category');

                const category = button.dataset.category;
                if (category === 'all') {
                    displayRecipes(recipes);
                } else {
                    const filteredRecipes = recipes.filter(recipe => recipe.category === category);
                    displayRecipes(filteredRecipes);
                }
            });
        });

        // Display recipes in the grid
        function displayRecipes(recipesToDisplay) {
            recipesContainer.innerHTML = '';
            
            recipesToDisplay.forEach(recipe => {
                const recipeCard = document.createElement('div');
                recipeCard.className = 'recipe-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition';
                recipeCard.innerHTML = `
                    <div class="relative overflow-hidden h-48">
                        <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image w-full h-full object-cover">
                        <div class="absolute top-3 right-3">
                            <button class="favorite-btn text-2xl text-white hover:text-red-500">
                                <i class="far fa-heart"></i>
                            </button>
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                            <h3 class="text-white font-bold text-lg">${recipe.title}</h3>
                            <div class="flex items-center mt-1">
                                <span class="text-yellow-400 mr-1">
                                    ${getStarRating(recipe.rating)}
                                </span>
                                <span class="text-white text-sm">${recipe.rating}</span>
                            </div>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="flex justify-between text-sm text-gray-600 mb-3">
                            <span><i class="fas fa-clock mr-1"></i> ${recipe.prepTime}</span>
                            <span><i class="fas fa-utensils mr-1"></i> ${recipe.servings}</span>
                            <span class="px-2 py-1 bg-gray-100 rounded-full text-xs">${recipe.difficulty}</span>
                        </div>
                        <button class="view-recipe-btn w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded transition" 
                                data-id="${recipe.id}">
                            Voir la recette
                        </button>
                    </div>
                `;
                recipesContainer.appendChild(recipeCard);
            });

            // Add event listeners to view recipe buttons
            document.querySelectorAll('.view-recipe-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const recipeId = parseInt(e.target.dataset.id);
                    const recipe = recipes.find(r => r.id === recipeId);
                    openRecipeModal(recipe);
                });
            });

            // Add event listeners to favorite buttons
            document.querySelectorAll('.favorite-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const icon = button.querySelector('i');
                    if (icon.classList.contains('far')) {
                        icon.classList.remove('far');
                        icon.classList.add('fas');
                        button.classList.add('text-red-500');
                    } else {
                        icon.classList.remove('fas');
                        icon.classList.add('far');
                        button.classList.remove('text-red-500');
                    }
                });
            });
        }

        // Open recipe modal
        function openRecipeModal(recipe) {
            document.getElementById('modal-image').src = recipe.image;
            document.getElementById('modal-image').alt = recipe.title;
            document.getElementById('modal-title').textContent = recipe.title;
            document.getElementById('prep-time').textContent = recipe.prepTime;
            document.getElementById('cook-time').textContent = recipe.cookTime;
            document.getElementById('servings').textContent = recipe.servings;

            // Populate ingredients
            const ingredientsList = document.getElementById('ingredients-list');
            ingredientsList.innerHTML = '';
            recipe.ingredients.forEach(ingredient => {
                const li = document.createElement('li');
                li.className = 'flex items-start';
                li.innerHTML = `
                    <span class="inline-block w-1 h-1 mt-2 mr-2 bg-orange-500 rounded-full"></span>
                    <span>${ingredient}</span>
                `;
                ingredientsList.appendChild(li);
            });

            // Populate instructions
            const instructionsList = document.getElementById('instructions-list');
            instructionsList.innerHTML = '';
            recipe.instructions.forEach(instruction => {
                const li = document.createElement('li');
                li.className = 'text-gray-700';
                li.textContent = instruction;
                instructionsList.appendChild(li);
            });

            // Show modal
            modal.classList.remove('opacity-0', 'pointer-events-none');
            modal.classList.add('opacity-100');
        }

        // Close modal
        closeModal.addEventListener('click', () => {
            modal.classList.remove('opacity-100');
            modal.classList.add('opacity-0', 'pointer-events-none');
        });

        // Helper function to generate star rating
        function getStarRating(rating) {
            let stars = '';
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 >= 0.5;
            
            for (let i = 0; i < fullStars; i++) {
                stars += '<i class="fas fa-star"></i>';
            }
            
            if (hasHalfStar) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            }
            
            const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
            for (let i = 0; i < emptyStars; i++) {
                stars += '<i class="far fa-star"></i>';
            }
            
            return stars;
        }