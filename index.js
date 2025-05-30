const args = process.argv.slice(2);
const [solicitud, recurso, ...rest] = args;
const BASE_URL = "https://fakestoreapi.com";

function ejemploDeUso() {
    console.log(
        "⚠️ Debes usar los comandos así: npm run start <solicitud> <recurso> [ARGS...]"
    );
    console.log("🗒️ Ejemplos:");
    console.log("👉  npm run start GET products");
    console.log("👉  npm run start GET products/15");
    console.log(
        '👉  npm run start POST products "Kit Boca Juniors" 179.99 "Fútbol"'
    );
    console.log("👉  npm run start DELETE products/7");
}

// Función principal
async function fetchData() {
    // Aquí llamamos a la función de ejemplo si faltan el método o el recurso
    if (!solicitud || !recurso) {
        ejemploDeUso();
        return;
    }

    // --- GET --- //
    if (solicitud === "GET") {
        if (recurso === "products") {
            try {
                const response = await fetch(`${BASE_URL}/products`);
                const products = await response.json();
                console.log("Lista completa de productos:", products);
            } catch (error) {
                console.error("🛑 Error al obtener los productos:", error);
            }

            // --- GET ESPECÍFICO --- //
        } else if (recurso.startsWith("products/")) {
            const productId = recurso.split("/")[1];
            if (!productId) {
                console.error("⚠️ Error: ID de producto no proporcionado.");
                ejemploDeUso();
                return;
            }
            try {
                const response = await fetch(
                    `${BASE_URL}/products/${productId}`
                );
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const product = await response.json();
                console.log("Producto específico:", product);
            } catch (error) {
                console.error(
                    `🛑 Error al obtener el producto ${productId}:`,
                    error
                );
            }
        } else {
            console.log("Recurso GET no reconocido.");
            ejemploDeUso();
        }
    }

    // --- POST --- //
    else if (solicitud === "POST") {
        if (recurso === "products") {
            const [title, price, category] = rest;

            if (!title || !price || !category) {
                console.error(
                    "🛑 Error: Faltan argumentos para crear un producto."
                );
                ejemploDeUso();
                return;
            }

            try {
                const response = await fetch(`${BASE_URL}/products`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        title: title,
                        price: parseFloat(price),
                        description: "Descripción para el nuevo producto.",
                        image: " ",
                        category: category,
                    }),
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }

                const nuevoProducto = await response.json();
                console.log(
                    "Producto creado correctamente:",
                    nuevoProducto
                );
            } catch (error) {
                console.error("🛑 Error al crear el producto:", error);
            }
        } else {
            console.log("Comando POST no reconocido");
            ejemploDeUso();
        }
    }

    // --- DELETE --- //
    else if (solicitud === "DELETE") {
        if (recurso.startsWith("products/")) {
            const productId = recurso.split("/")[1];

            if (!productId) {
                console.error(
                    "🛑 Error: Faltan argumentos para eliminar un producto."
                );
                ejemploDeUso();
                return;
            }

            try {
                const response = await fetch(
                    `${BASE_URL}/products/${productId}`,
                    {
                        method: "DELETE",
                    }
                );

                if (!response.ok) {
                    throw new Error(
                        `Error: ${response.status} - ${response.statusText}`
                    );
                }

                const deletedProduct = await response.json();
                console.log(
                    `Producto ${productId} eliminado correctamente:`,
                    deletedProduct
                );
            } catch (error) {
                console.error(
                    `🛑 Error al eliminar el producto ${productId}:`,
                    error
                );
            }
        } else {
            console.log("Comando DELETE no reconocido.");
            ejemploDeUso();
        }
    } else {
        console.log("Tipo de solicitud no reconocido.");
        ejemploDeUso();
    }
}

fetchData();