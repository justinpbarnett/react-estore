using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private StoreContext _context;

        public ProductsController(StoreContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            var products = await _context.Products.ToListAsync();
            if (products == null)
            {
                return NotFound();
            }
            return Ok(products);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }

        [HttpPost]
        public async Task<ActionResult<Product>> AddProduct(Product product)
        {
            if (product == null)
            {
                return BadRequest();
            }
            if (string.IsNullOrEmpty(product.Name))
            {
                return BadRequest("Name is required");
            }
            if (product.Price <= 0)
            {
                return BadRequest("Price must be greater than 0");
            }
            _context.Products.Add(product);
            await _context.SaveChangesAsync();
            return Ok(product);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Product>> UpdateProduct(int id, Product product)
        {
            var productToUpdate = await _context.Products.FindAsync(id);
            if (productToUpdate == null)
            {
                return NotFound();
            }
            productToUpdate.Name = product.Name;
            productToUpdate.Price = product.Price;
            await _context.SaveChangesAsync();
            return Ok(productToUpdate);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteProduct(int id)
        {
            var productToDelete = await _context.Products.FindAsync(id);
            if (productToDelete == null)
            {
                return NotFound();
            }
            _context.Products.Remove(productToDelete);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
