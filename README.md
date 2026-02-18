# Visited-Places
# 🌍 Favourite Places  Application

A dynamic web application designed to help users document their travel experiences and principles to manage and display visited locations.

## 🚀 Features
- **Interactive UI:** Smooth, responsive design with hover effects and animations.
- **Entry:** Add locations, landmarks, seasonal info, and personal notes.
- **Photo Integration:** Users can paste image URLs to visualize their memories.
- **Logic:** Uses custom constructors and prototypes for data management.

## 🛠️ Technical Implementation

### **Constructors & Prototypes**
The core logic of this application follows the **Object-Oriented** pattern:
- **Constructor (`VisitedPlace`):** Acts as a blueprint for every travel entry, ensuring data consistency for location, landmark, and notes.
- **Prototypes:** The `generateCardHTML` method is attached to the `VisitedPlace.prototype`. This ensures that all instances share a single memory-efficient function to render their UI components.

## 🧪 Testing (Verification)

The following test cases were performed to ensure application stability:

| Test Case | Description | Expected Result | Status |
|:--- |:--- |:--- |:--- |
| **Validation** | Clicking "Add" with empty fields | Alert triggers; no card is created | ✅ Pass |
| **Data Input** | Entering special characters in notes | Text renders correctly in the card | ✅ Pass |
| **Image Handling** | Entering a valid URL | Image displays within the card | ✅ Pass |
| **Update** | Adding multiple entries | Newest entry appears at the top | ✅ Pass |
| **Confirmation Check** | Viewing on screen  | Form and cards stack vertically | ✅ Pass |


## 📂 File Structure
- `index.html`: main structure and form elements.
- `style.css`: Advanced styling, Flexbox layout, and @keyframes animations.
- `script.js`: Logic containing the Constructor and Prototype definitions.

## 📜 How to Run
1. Download the project files.
2. Open `index.html` in any modern web browser.
3. Fill out the form and click "Add to Diary" to see the  logic in action!
