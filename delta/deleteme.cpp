#include <GL/glut.h>

void display() {
    glClear(GL_COLOR_BUFFER_BIT);

    // Base of the hut
    glBegin(GL_POLYGON);
    glColor3f(1.0f, 0.87f, 0.34f); // Golde  color base
    glVertex2f(-0.6f, -0.7f); // Bottom left corner
    glVertex2f(0.6f, -0.7f);  // Bottom right corner
    glVertex2f(0.6f, 0.0f);   // Top right corner
    glVertex2f(-0.6f, 0.0f);  // Top left corner
    glEnd();

    // Door of the hut
    glBegin(GL_QUADS);
    glColor3f(0.36f, 0.25f, 0.20f); // dark brown color  door
    glVertex2f(-0.15f, -0.7f);  // Bottom left corner 
    glVertex2f(0.15f, -0.7f);   // Bottom right corner 
    glVertex2f(0.15f, -0.2f);   // Top right corner 
    glVertex2f(-0.15f, -0.2f);  // Top left corner 
    glEnd();

    // Roof of the hut
    glBegin(GL_TRIANGLES);
    glColor3f(0.55f, 0.27f, 0.07f); // Dark brown color  roof
    glVertex2f(-0.7f, 0.0f);  // Bottom left corner 
    glVertex2f(0.7f, 0.0f);   // Bottom right corner 
    glVertex2f(0.0f, 0.7f);   // Top peak 
    glEnd();

    // Flush the graphics pipeline to display the hut
    glFlush();
}

void init() {
    // Set the clear color to white
    glClearColor(1.0f, 1.0f, 1.0f, 1.0f);

    // Set up the coordinate system
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluOrtho2D(-1.0, 1.0, -1.0, 1.0);
}

int main(int argc, char** argv) {
    // Initialize GLUT
    glutInit(&argc, argv);
    glutInitWindowSize(500, 500);
    glutCreateWindow("Simple Hut");

    // Initialize OpenGL settings
    init();

    // Register the display callback function
    glutDisplayFunc(display);

    // Enter the main loop
    glutMainLoop();

    return 0;
}
